import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import firebaseConf from '../config/firebase';
import routerApiV1 from '../routes';
class Server {
    private app: Application=express();
    private port = process.env.PORT || '3000';
    constructor() {
        dotenv.config();

        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        firebaseConf();
    }

    routes() {
        routerApiV1(this.app);
    }

    listen() {
        this.app.listen(this.port, () => { return; });
    }
}

export default Server;




