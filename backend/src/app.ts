import express, {Request, Response, NextFunction, Application,} from "express";
import {join} from "path";
import dotenv from 'dotenv';
dotenv.config({path:join(__dirname,"config/config.env")});
import cookieParser from 'cookie-parser';
import  userRouter  from "./router/userRouter";
import cors from "cors"
import {errorMiddleware} from "./middleware/error";
import ProductRouter from "./router/productRouters";

const {PORT} = process.env;

class App {
    public app:Application;
    constructor() {
        this.app = express();
        this.initialiseMiddleware();
        // this.initialiseErrorMiddleware();
    }
    public initialiseMiddleware () {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(cors());
        this.app.use("/api", new userRouter().router);
        this.app.use("/api", new ProductRouter().router);
        this.app.use(errorMiddleware);
        this.app.get('/',(req,res)=>{
            res.send("Server is Working")    
        })
    }
    // public initialiseErrorMiddleware () {
        // this.app.use((err, Req:Request, res:Response, next:NextFunction)=>{
        //     const status = err.status || 500 ;
        //     const message = err.message || "Internal Server Error";
        //     res.status(status).json({
        //         success:err.success,
        //         status:err.status,
        //         message,
        //         stack:err.stack,
        //         error:err
        //     });
        // })
    // }

    public startserver () {
        this.app.listen(PORT,()=>{
            console.log(`Server is Connected in http://localhost:${PORT}`);
        })
    }
} 
export default App;