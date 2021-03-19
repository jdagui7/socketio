


const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        console.log('Mensaje Recibido',payload);
        const id = 123456789;

        if (!callback) return; // evitar que ocurra error si mensaje del cliente no se hizo con callback
 
        // si el cliente remoto envio mensaje con peticion de confirmacion en 'callback' en parametro 3 entonces:
        // if (payload.usuario) {
        //     callback({
        //         resp: 'El mensaje contiene la llave: usuario' // validacion positiva
        //     });
        // } else {
        //     callback({
        //         resp: 'ATENCION!El mensaje NO contiene la llave: usuario' // validacion negativa
        //     });
        // }
       callback( id );

        socket.broadcast.emit('enviar-mensaje', payload );

    })

}



module.exports = {
    socketController
}

