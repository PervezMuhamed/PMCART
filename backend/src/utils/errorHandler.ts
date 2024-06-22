// export  const errorHandler =(status,message)=>{
//     const err = new Error();
//     err.status = status;
//     err.message = message;
//     return err;
    
// }

class ErrorHandler extends Error {
    public status;
    constructor(message, status) {
        super(message)
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorHandler;