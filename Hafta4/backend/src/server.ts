import mongoose from "mongoose";
import app from "./index";

mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then((result)=>{
        if(result){
            void app.listen({host:"127.0.0.1",port:8000})
        }
    })
    .catch((err)=>{
        console.error(err)
    })