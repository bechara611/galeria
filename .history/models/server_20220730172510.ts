import express, {Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as routerUsuario  from '../routes/usuario';
import * as routerUsuarioEImagen from './../routes/usuarioEimagen'
import * as routerLogin from './../routes/login'
import * as routerUpload from './../routes/upload'
import { conectarDB } from '../db/config';
import fileUpload from 'express-fileupload'

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
            usuarioEimagen:'/api/imagenes/',
            login:'/api/login',
            upload:'/api/upload'
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
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath:true//que el .mv al guardar el archivo pueda crear la carpeta si no existe
        }));
    }

    Puerto() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en ${this.port}`)
        })
    }

    Rutas(){
        this.app.use(this.rutas.usuario,routerUsuario.default)
        this.app.use(this.rutas.usuarioEimagen,routerUsuarioEImagen.default)
        this.app.use(this.rutas.login,routerLogin.default)
        this.app.use(this.rutas.upload,routerUpload.default)
    }
    //acceder a la BD
   async BaseDatos(){
        await conectarDB();
    }
}

export default Server;

