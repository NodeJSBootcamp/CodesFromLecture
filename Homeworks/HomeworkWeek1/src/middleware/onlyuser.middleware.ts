import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.utils"
import UserModel from "../data/user/user.data"
import { returnErrorUnexpected } from "../response/response.error"
import TweetModel from "../data/tweet/tweet.data"

const onlyUser = (req: Request, res: Response, next: NextFunction) => {
    TweetModel.findOne({ _id: req.body.tweetID })
        .then((tweet) => {
            console.log();
            if (tweet?.owner.toString() == req.body.userID.toString()) {
                next()
            } else {
                returnErrorUnexpected("Blocked", res)
            }
        })
        .catch((error) => {
            returnErrorUnexpected(error, res)
        })
}

export default onlyUser