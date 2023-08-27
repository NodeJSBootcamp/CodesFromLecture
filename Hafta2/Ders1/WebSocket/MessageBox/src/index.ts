import express from "express"
import userRouter from "./router/user.router"
import chatRouter from "./router/chat.router"
import http from 'http';
import socketIo from 'socket.io';
import { createSocketConnection } from "./chat/chat";

const app = express()
app.use(express.json())
const server = http.createServer(app);
const io = new socketIo.Server(server);
app.use("/user",userRouter)
app.use("/chat",chatRouter)

createSocketConnection(io)

export default server


