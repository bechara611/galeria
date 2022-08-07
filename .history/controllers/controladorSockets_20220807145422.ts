import { Socket } from "socket.io"
console.log('primero')


const controladorSocket= async (socket:Socket)=>{
    console.log('segundo')
    console.log(`cliente conectado id: ${socket.id}`)
    socket.once('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });


}

export {controladorSocket}