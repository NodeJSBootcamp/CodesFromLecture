import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TweetSchema = new Schema(
    {
        comment:{
            type:String,
            required:true
        },
    }
)
const TweetModel = mongoose.model('Tweet',TweetSchema)

export default TweetModel;