const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{origin:'*',methods:["GET","POST"]}
});
io.on("connection",(socket)=>{
    console.log("user connected",socket.id)

    socket.on('joined',(name,room)=>{
        socket.join(name);
        //const newroom = room;
        console.log(name+" joined the chat ",room)
    })

    socket.on("send-message",(data,room)=>{

        console.log('recv ', data)
        socket.io
        //socket.to(room).emit('receive',data);
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id)
    })
})
server.listen(8000,()=>{
    console.log("server running");
});