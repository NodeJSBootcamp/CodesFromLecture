import express from "express"
import userRouter from "./router/user.router"
import tweetRouter from "./router/tweet.router"
import bodyParser from "body-parser"
import multer from "multer";
import path from 'path';
import { uploadFile } from "./controller/uploader.controller";

const app = express()
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './uploads');
    },
    filename: (req, file, callback) => {
      const extname = path.extname(file.originalname);
      const filename = `${file.fieldname}-${Date.now()}${extname}`;
      callback(null, filename);
    },
});
const upload = multer({ storage });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user",userRouter)
app.use("/tweet",tweetRouter)
app.post("/upload",upload.single('file'),uploadFile)

export default app