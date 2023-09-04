import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.utils"
import UserModel from "../data/user/user.data"
import { returnErrorUnexpected } from "../response/response.error"
import TweetModel from "../data/tweet/tweet.data"


const exceptUser = (req: Request, res: Response, next: NextFunction) => {

    TweetModel.findOne({ _id: req.body.tweetID, owner: req.body.userID })
        .then((tweet) => {
            if (!tweet) {
                next()
            } else {
                returnErrorUnexpected("Blocked", res)
            }
        })
        .catch((error) => {
            returnErrorUnexpected(error, res)
        })

}

export default exceptUser