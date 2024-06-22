import express,{Router} from "express";
import userController from "../controller/userController";
import Authorization from "../middleware/verifytoken";
// import { user } from "../di/container.di";
// import { inject, injectable } from "inversify";
// import { Types } from "../di/Types";
// import UserBusiness from "../business/user.business";
// const UserController = new userController();

export default class userRouter {
    public router:Router;
    private controller: userController = new userController();
    private authenticate: Authorization = new Authorization()
    constructor() {
        this.router = express.Router();
        this.registerRoute();
    }
    public registerRoute () {
        this.router.post("/register", this.controller.Register);
        this.router.post("/login", this.controller.Login);
        this.router.get("/myProfile", this.authenticate.verifyToken, this.controller.getUserProfile);
    }
}

// export const router = express.Router();

// router.post("/register", (req, res, next)=>{
//     user.CreateUser(req, res, next)
// });
