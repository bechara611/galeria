import Server from "./models/server"

const server= new Server();

//variables globales
declare global {
    var ID_user_mongo: any;
    var TOKEN:any;
  }

  declare module 'express' {
    interface Request {
      body: any // Actually should be something like `multer.Body`
      files: any // Actually should be something like `multer.Files`
    }
  }


//ejecutar el servidor
server.Puerto();

