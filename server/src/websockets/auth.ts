import cookieParser from 'cookie-parser';
import { Request } from 'express';
import {MemoryStore, SessionData} from 'express-session';
import { IncomingMessage } from 'http';
import internal from 'stream';

const parseCookie = cookieParser('2fgeowfhpw;oeih3wo');

// Aggiunge il campo request.headers.cookie
const convertToExpressCookie = (request: IncomingMessage): Request => {
    const expressRequest = request as Request;
    const cookieHeaderIndex = request.rawHeaders.indexOf('Cookie') + 1;
    const cookieHeader = request.rawHeaders[cookieHeaderIndex];
    expressRequest.headers.cookie = cookieHeader;
    return expressRequest;
};

export const websocketCheckAuth = (
    next: (session: SessionData) => void,
    request: IncomingMessage,
    socket: internal.Duplex,
    store: MemoryStore
): void => {
    const expressRequest = convertToExpressCookie(request);
    parseCookie(expressRequest, null, () => {
        console.log('HEADERS', expressRequest.headers);
        console.log('RAW HEADERS', expressRequest.rawHeaders);
        console.log('COOKIES', expressRequest.cookies);
        console.log('SIGNED COOKIES', expressRequest.signedCookies);
        const authCookie = expressRequest.signedCookies['connect.sid'];
        if (authCookie === undefined || authCookie === '') {
            console.log('No authentication cookies in request');
            socket.destroy();
            return;
        }

        store.get(authCookie, (error, session) => {
            if (session) {
                next(session);
            } else {
                console.log('No session for this cookie');
                socket.destroy();
            }
        });
    });
};
