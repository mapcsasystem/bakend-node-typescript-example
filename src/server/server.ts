import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import p from '../config/firebase';
class Server {
  private app: Application;
  private port = '';

  constructor() {
    dotenv.config();

    this.app = express();
    this.port = process.env.PORT || '3000';
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
    p();
  }

  routes() {
    this.app.get('/ping', (_req: Request, res: Response) => {
      res.status(200).json({
        pong: 'pong'
      });

    });
  }
  listen() {
    this.app.listen(this.port, () => {return;});
  }
}

export default Server;




