import { Socket } from "socket.io"



const controladorSocket=(socket:Socket)=>{
    console.log(`cliente conectado id: ${socket.id}`)
    socket.once('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

}

export {controladorSocket}