import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"

// import all routes

import userRoutes from "./routes/user.routes.js"

dotenv.config();
const app = express();
app.use(cors({
    origin:process.env.BASE_URL,
    methods:["GET","POST","DELETE","UPDATE","PUT"],
    allowedHeaders:["Content-Type","Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 4000;

db();

//user routes
app.use("/api/v1/users", userRoutes)




app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
    
})