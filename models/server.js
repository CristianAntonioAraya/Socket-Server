const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path =  require('path')

class Server {

    constructor () {

        this.app = express();
        this.port = 4000;

        //Http server
        this.server = http.createServer( this.app );

        //Socket Config
        this.io = socketio( this.server, { /* Configuration */} )

    }

    middlewares() {

        this.app.use( express.static( path.resolve( __dirname, '../public' ))) 

    }

    execute () {

        //Initializing middelwares
        this.middlewares();

        //Initializing server
        this.server.listen( this.port , () => {
            console.log(`Server running in server ${this.port}`);
        })

    }

}


module.exports = Server;