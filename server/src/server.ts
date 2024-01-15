import express from 'express';
import https from 'https';
import { routes } from './routes';
import { websockets } from './websockets';
import session from 'express-session';
import createMemoryStore from 'memorystore';
import fs from 'fs';
import multer from 'multer';
import uuid from 'uuid';
import cors from 'cors';

declare module 'express-session' {
    interface SessionData {
        userId: number;
        email: string;
        isAdmin: boolean;
    }
}

const app = express();
const port = 8080;
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       const fileComponents = file.originalname.split('.');
       const extension = fileComponents[fileComponents.length -1];

       const changedName = uuid.v4();

       cb(null, `${changedName}.${extension}`);

   }
});

const Data = multer({storage: storage, limits: {fileSize: 40000000 }});


const server = https.createServer({
    key: fs.readFileSync(`${__dirname}certificati/domain.key`),
    cert: fs.readFileSync(`${__dirname}certificati/domain.crt`),
    passphrase: 'Andreia',
}, app);

const MemoryStore = createMemoryStore(session);
const store = new MemoryStore({
    checkPeriod: 86400000
});
app.use(
    session({
        secret: '2fgeowfhpw;oeih3wo',
        cookie: {
            secure: true,
            sameSite: 'none',
            maxAge: 86400000,
            httpOnly: true
        },
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

routes(app);
websockets(server, store);

// Servire il frontend
//app.use(express.static(`${__dirname}/../public/`));

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
