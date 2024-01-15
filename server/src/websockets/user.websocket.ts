import ws from 'ws';
import {SessionData} from "express-session";
import {IncomingMessage} from "http";

export interface NamedWebsocket {
    id: number;
    websocket: ws;
}

// Array delle websocket aperte
export const openWebsockets: NamedWebsocket[] = [];

// Websocket ws://localhost:8080/product
const wsUserServer = new ws.WebSocketServer({ noServer: true });

wsUserServer.on('connection', (ws: ws, request: IncomingMessage, session: SessionData) => {
    console.log('New connection', request.url, request.method, session.email);

    const myNamedWebsocket = (): NamedWebsocket => { return {
        id: session.userId,
        websocket: ws
    }};

    openWebsockets.push(myNamedWebsocket());

    ws.on('open', () => {
        console.log('WS OPEN', ws);
    });

    ws.on('message', (data, isBinary) => {
        console.log('WS MESSAGE - WS', ws, 'DATA', String(data), `isBinary: ${isBinary}`);
    });

    ws.on('error', (error) => {
        console.log('WS ERROR', ws, error);
    });

    ws.on('close', (code, reason) => {
        console.log('WS CLOSE', ws, code, reason);
        openWebsockets.splice(openWebsockets.indexOf(myNamedWebsocket()), 1);
    });
});

export default {
    path: '/user',
    websocketServer: wsUserServer
};
