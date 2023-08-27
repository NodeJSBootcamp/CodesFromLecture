const express = require("express")
const app = express()

const server = require("http").createServer(app)
const io = require("socket.io")(server)
const port = 8000
server.listen(port,()=>{
    console.log("Server listening at port %d",port);
})


//Chatroom
let numUsers = 0
io.on('connection',(socket)=>{
    let addedUser = false;
    socket.on("add user",(username)=>{
       if(addedUser) return
       socket.username = username;
       ++numUsers;
       addedUser = true
       console.log(username + "is connected");
       socket.emit('login',{
        numUsers:numUsers
       })
       socket.broadcast.emit("user joined",{
            username:socket.username,
            numUsers: numUsers
       })
    })
})