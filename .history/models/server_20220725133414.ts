import express, {Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as routerUsuario  from '../routes/usuario';
import router from '../.history/routes/usuario_20220725133258';

dotenv.config();


class Server {
    //Declaraciones de variables y funciones
    app: Application;
    numero: number;
    variable: any;
    port: string;
    rutas:any;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.Middlewares();
        this.rutas={
            usuario:'/api/usuario'
        }

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

    Rutas(){
        this.app.use(this.rutas.usuario,routerUsuario.default)
    }
}

export default Server;
