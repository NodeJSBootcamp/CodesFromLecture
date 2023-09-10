import mongoose, { Schema, Document, Model }  from "mongoose";


const userpref = new Schema (
    {
        email:{
            type:String
        },
        gender:{
            type:String
        },
        phone:{
            type:String
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true

        }





    }
)


const userprefmodel=mongoose.model('Userpref', userpref);

export default userprefmodel
