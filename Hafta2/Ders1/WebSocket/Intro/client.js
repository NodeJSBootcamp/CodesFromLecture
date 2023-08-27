const io = require("socket.io-client")
const readline = require("readline")

const socket = io("ws://localhost:8000/",{})

socket.on("connect",()=>{
    console.log("connected");
})

socket.on("user joined",(body)=>{
    console.log(body.username + "is connected message is comming from server");
})

setInterval(() => {
    const start = Date.now();
    socket.emit("ping", () => {
        console.log(`pong (latency: ${Date.now() - start} ms)`);
    });
}, 1000);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('Enter a message to send (type "exit" to quit): ');
rl.prompt();

rl.on('line', (line) => {
    console.log(line);
    if (line.toLowerCase() === 'exit') {
        console.log('Connection closed.');
        socket.disconnect();
        rl.close();
    }else if(line.toLocaleLowerCase() === 'add user'){
        socket.emit("add user",{username:"dogukan"})
    }
    rl.prompt();
});
