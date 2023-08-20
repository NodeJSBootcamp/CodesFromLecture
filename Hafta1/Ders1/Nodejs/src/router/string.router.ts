import express from "express"
import * as stringController from "../controller/string.controller"
const stringRouter = express.Router()


stringRouter.post("/to/uppercase",stringController.toUpperCase)
stringRouter.post("/to/lowercase",stringController.toLowerCase)

export default stringRouter;