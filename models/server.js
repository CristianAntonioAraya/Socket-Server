const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path =  require('path');
const Sockets = require('./sockets');

class Server {

    constructor () {

        this.app = express();
        this.port = process.env.PORT;

        //Http server
        this.server = http.createServer( this.app );

        //Socket Config
        this.io = socketio( this.server, { /* Configuration */} )

    }

    socketConfig () {
        new Sockets( this.io )
    }

    middlewares() {

        this.app.use( express.static( path.resolve( __dirname, '../public' ))) 

    }

    

    execute () {

        //Initializing middelwares
        this.middlewares();

        this.socketConfig();


        //Initializing server
        this.server.listen( this.port , () => {
            console.log(`Server running in server ${this.port}`);
        })

    }

}


module.exports = Server;