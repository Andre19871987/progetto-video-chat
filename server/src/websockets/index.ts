import { Server } from 'http';
import { MemoryStore } from 'express-session';
import { websocketCheckAuth } from './auth';
import userWebsocket from "./user.websocket";

// In caso si debbano definire nuove websocket, basta definirle in un file websocket.ts,
// importare il file e aggiungere l'oggetto importato a websocketServers

const websocketServers = [userWebsocket];

export const websockets = (http: Server, store: MemoryStore): void => {
    http.on('upgrade', (request, socket, head) => {
        websocketCheckAuth(
            (session) => {
                const pathname = request.url;

                const websocketServer = websocketServers.find((websocketServer) => websocketServer.path === pathname);

                if (websocketServer) {
                    websocketServer.websocketServer.handleUpgrade(request, socket, head, (ws) => {
                        websocketServer.websocketServer.emit('connection', ws, request, session);
                    });
                } else {
                    socket.destroy();
                }
            },
            request,
            socket,
            store
        );
    });
};
