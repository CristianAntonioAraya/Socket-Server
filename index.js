

//Express server
const express = require('express')

const app = express();

//Socket server
const server = require('http').createServer(app);

//Socket server config
const io = require('socket.io') ( server );

// Deploy public directory

app.use( express.static(__dirname + '/public'))

io.on('connection', ( socket ) => {
    //Send message to client using emit
    //welcome-message is the event name, and is requiered in the client to listen this event
    socket.emit('welcome-message', { msg: 'Welcome to the Socket server!!', date: new Date()})
 })

server.listen( 4000 , () => {
    console.log('Server running in server :4000');
})