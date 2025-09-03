import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const db = () => {

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to mongoDB");
        
    })
    .catch((err)=>{
        console.log("Database conenction failed");
        
    })
}

export default db;