import express from "express"
import router from "./router/redirection"
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express()
app.use(express.json())
app.use("/",router)

export default app