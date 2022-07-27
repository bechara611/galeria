import express, {Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();


class Server {
    //Declaraciones de variables y funciones
    app: Application;
    numero: number;
    variable: any;
    port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.Middlewares();

    }


    Middlewares(){
        //Middleware para servir una carpeta public por defecto
        this.app.use(express.static('public'));
        //middleware del cors para que cualquiera pueda acceder a nuestreo restserver
        this.app.use(cors())
    }

    Puerto() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en ${this.port}`)
        })
    }
}

export default Server;
