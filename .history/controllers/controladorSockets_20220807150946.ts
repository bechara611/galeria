
const controladorSocket = (socket)=>{
    console.log(`cliente conectado id: ${socket.id}`)
    socket.once('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });
    socket.on('enviar-mensaje',(payload,callback)=>{//escuchando el mensaje del cliente
       // this.io.emit('enviar-mensajes',payload)// mensaje a todos los clientes
       // socket.emit('respuesta-mensaje',payload)
     //  socket.emit('respuesta-mensaje', payload );
       socket.broadcast.emit("respuesta-mensaje", payload);//mensaje a todos menos al que lo manda
        const id=123;
        callback(id)// dandole la respuesta al cliente que me envio un enviar-mensaje
    })

}