

class Sockets {

    constructor ( io ) {

        this.io = io;

        this.socketEvents();

    }

    socketEvents() {
        //On client connection
        this.io.on('connection', ( socket ) => {
            // Listen event: welcome-message
            socket.on('welcome-message', ( data ) => {
                console.log( data )
            })
            // Listen event: client-message
            socket.on('client-message', ( data ) => {
                console.log(data);

                // Emit new data to message-from-server event
                this.io.emit( 'message-from-server', data );
            });


        })


    }

}


module.exports = Sockets;