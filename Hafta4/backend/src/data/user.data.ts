import mongoose, { Schema, Document, Model }  from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required:true
        },
        password: {
            type:String,
            required:true

        },
      

    }

)

const UserModel=mongoose.model('User', userSchema);

export default UserModel
