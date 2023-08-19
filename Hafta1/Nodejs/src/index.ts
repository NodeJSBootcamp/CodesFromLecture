import express from "express"
import stringRouter from "./router/string.router";
import bodyParser from "body-parser"
const app = express()

app.use(bodyParser.json())
app.use("/string",stringRouter)

export default app;