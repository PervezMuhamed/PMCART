import { Request, Response, NextFunction} from "express";
import bcrypt from "bcrypt";
import userModel from "../model/usermodel";
import Errorhandler from "../utils/errorHandler";
import jwt from "jsonwebtoken";

export class userController {

    public Register = async(req:Request, res:Response, next:NextFunction)=>{
        const {userName, password, email} = req.body;
        if(!userName||!email||!password) {
            return next (new Errorhandler ("Please filled all the fields", 400));
        }
        try {
            const hashPassword = await bcrypt.hash(password, 7);
            const existUser = await userModel.findOne({userName:userName});
            if(existUser) return next(new Errorhandler("userName Already Exists Please try with new userName", 401));
            const existEmail = await userModel.findOne({email: email});
            if(existEmail) return next(new Errorhandler("Email Already Exists Please try with new email", 401));
            const user = await userModel.create({...req.body, password:hashPassword});
            res.status(200).json({
                success:true,
                messsage:"Data Register Successfully",
                user,
            });
        } catch (error) {
            return error;
        }
    }
    public Login = async(req:Request, res:Response, next:NextFunction)=>{
        const { TOKENKEY, COOKIE_EXPIRES_TIME } = process.env;
        const {email,password}=req.body;
        if(!email||!password){
            return next (new Errorhandler ("Please Enter Email and Password", 400));        }
        try {
            const user =await userModel.findOne({email}).select("+password");
            if(!user) return next(new Errorhandler("Invalid email or password", 401));
            const validPw = await bcrypt.compare(password, user.password);
            if(!validPw) return next(new Errorhandler("Invalid email or password", 401));
            const token = jwt.sign({id:user._id}, TOKENKEY as string);
            res.cookie("accesstoken", token, { httpOnly: true}).status(200).json({
                success:true,
                message:"login Successfully",
                user,      
                token,
            })
        } catch (error) {
            return error;
        }
    }
    public getUserProfile =async(req, res:Response, next:NextFunction)=>{
        try {
            const user = await userModel.findById(req.user.id);
            res.status(200).json({
                success:true,
                user
            })
        } catch (error) {
            return error;
        }
    }
}

export default userController;