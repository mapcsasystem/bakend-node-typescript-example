import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import firebaseConf from '../api-v1-firebase/config/firebase';
import routerApiV1 from '../api-v1-firebase/routes';

class Server {

    private app: Application=express();
    private port:string = process.env.PORT || '3000';
    
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
        routerApiV1(this.app);// /api/v1
    }

    listen() {
        this.app.listen(this.port, () => { return; });
    }
}

export default Server;




