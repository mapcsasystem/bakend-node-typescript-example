import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
class Server{
  private app:Application;
  private port='';
    
  constructor(){
    dotenv.config();
   
    this.app=express();
    this.port = process.env.PORT || '3000';
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.get('/ping', (_req: Request, res: Response) => {
      res.status(200).json({
        pong: 'ponggg'
      });
      
    });
  }
  listen(){
    this.app.listen(this.port, () => {
      console.log(`Escuchando en puerto ${this.port}`);
    });
  }
}

export default Server;




