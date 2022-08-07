import { Socket } from "socket.io"
console.log('primero js')


const controladorSocketJS= async (socket = new Socket())=>{
    console.log('segundo')
    console.log(`cliente conectado id: ${socket.id}`)
    socket.once('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });


}

export {controladorSocketJS}