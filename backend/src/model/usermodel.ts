import { Schema, model } from "mongoose";
import validator from "validator";
import { User } from "./Interface/usermodel.interface";

const userSchema = new Schema({
    userName:{
        type:String,
        trim:true,
        reuqied:[true, "Please Enter Username"],
    },
    email:{
        type:String,
        validate:[validator.isEmail, "Please Enter Valid Email"],
        required:[true,  "Please Enter Email"],
    },
    password:{
        type:String,
        required:[true, "Please Enter Password"]
    },
    // personalDetails:{
    //     gender:{
    //         type:String,
    //         required:[true, "Please Enter Gender"]
    //     },
    //     age: Number
    // } 
},{timestamps:true});

export default model<User>("users",userSchema)
