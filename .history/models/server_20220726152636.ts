import express, {Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as routerUsuario  from '../routes/usuario';
import * as routerUsuarioEImagen from './../routes/usuarioEimagen'
import { conectarDB } from '../db/config';

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
            usuario:'/api/usuario',
            usuarioEimagen:'/api/imagenes/'
        }
        this.Rutas();
        this.BaseDatos();
    }


    Middlewares(){
        //Middleware para servir una carpeta public por defecto
        this.app.use(express.static('public'));
        //middleware del cors para que cualquiera pueda acceder a nuestreo restserver
        this.app.use(cors())
        this.app.use(express.json())
    }

    Puerto() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en ${this.port}`)
        })
    }

    Rutas(){
        this.app.use(this.rutas.usuario,routerUsuario.default)
        this.app.use(this.rutas.usuarioEimagen,routerUsuarioEImagen.default)
    }
    //acceder a la BD
   async BaseDatos(){
        await conectarDB();
    }
}

export default Server;

