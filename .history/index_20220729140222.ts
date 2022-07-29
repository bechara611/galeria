import Server from "./models/server"

const server= new Server();

//variables globales
declare global {
    var ID_user_mongo: any;
    var TOKEN:any;
  }




//ejecutar el servidor
server.Puerto();

