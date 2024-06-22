import mongoose from "mongoose";

const {MONGODB_URL} = process.env;

class  Database {
    public initialiseDatabaseConnection () {
        mongoose.connect(MONGODB_URL as string)
        .then(()=>{
            console.log(`DB is Connected`);
        }) 
        .catch((error)=>{
            console.log( `Db is Not Connected ${error}`);
            
        })
    }
}
export default Database;