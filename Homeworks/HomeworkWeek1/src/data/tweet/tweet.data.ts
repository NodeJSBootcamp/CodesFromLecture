import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TweetSchema = new Schema(
    {
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
        text:{
            type:String,
            required:true
        },
        likedBy:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        comments: [
            {
                userID: {
                  type: mongoose.Schema.Types.ObjectId,
                  required: true,
                  ref: "User",
                },
                comment: {
                  type: String,
                  required: true,
                },
            },
        ],
        isDeleted:{
            type:Boolean,
            default:false
        }
    }
)
const TweetModel = mongoose.model('Tweet',TweetSchema)

export default TweetModel;