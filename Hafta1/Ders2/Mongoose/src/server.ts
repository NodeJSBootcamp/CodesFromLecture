import app from "."
import mongoose from "mongoose"


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(result=>{        
        if(result){
            void app.listen({host:"0.0.0.0",port:8000})  
            return {connectionStatus:true}
        }
    })
    .then((status)=>{
        console.log(`connection status is ${status?.connectionStatus}`);
    })
    .catch(exception=>{
        console.error(exception)
    })
    .finally(()=>{
        dividedByTwo(
            "dscvsdf",
            (res:any)=>{
                console.log(`result is ${res}`);      
            },
            ()=>{
                console.log(`finally`);      
            },
            (exception)=>{
                console.log(`exception is ${exception}`);      
            }
        ) 
    })


function dividedByTwo(v1:any,then:(res:any)=>void,customFinally:()=>void,customCatch:(exception:string)=>void){
    try{
        if(v1 instanceof Number){
            then((v1 as number)/2)
        }else{
            throw new DOMException()
        }
    }catch{
        customCatch("Number cannot be divided")
    }
    customFinally()
}