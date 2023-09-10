import mongoose from "mongoose";
import app from "./index";
import dotenv  from "dotenv"

dotenv.config()




mongoose.connect(process.env.MONGODB_URL  ?? "")
    .then((result)=>{
        if(result){
            void app.listen({host:"127.0.0.1",port:8000})
        }
    })
    .catch((err)=>{
        console.error(err)
    })