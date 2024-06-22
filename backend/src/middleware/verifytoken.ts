import {Request, Response, NextFunction} from 'express';
import ErrorHandler from '../utils/errorHandler';
import jwt from "jsonwebtoken";

class Authorization {

    public verifyToken = async(req, res:Response, next:NextFunction)=>{
        const token = req.cookies.accesstoken;
        if(!token) return next (new ErrorHandler("Login first to handle this resources", 401));
        jwt.verify(token, process.env.TOKENKEY as string,(error, user)=>{
            if(error) return next (new ErrorHandler("not a authorized user", 401));
            req.user = user;
            next();
        })
    }

    public authorizeRoles=(...roles)=>{
        return (req,res,next)=>{
            if(!roles.includes(req.user.role)){
                return next( new ErrorHandler(`Role ${req.user.role} is Not allowed `, 401))
            }
            next();
        }
    }
}


export default Authorization;