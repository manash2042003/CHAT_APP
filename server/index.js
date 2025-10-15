// Example of Mongoose connection code in your index.js
// import mongoose from 'mongoose';
// import 'dotenv/config'; 

// mongoose.connect(process.env.DATABASE_URL)
//     .then(() => {
//         console.log("✅ MongoDB Atlas Connected Successfully!");
//         // Start your server here after successful connection!
//     })
//     .catch(err => {
//         console.error("❌ MongoDB Connection Error:", err.message);
//     });

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
dotenv.config();
const app= express();
const port=process.env.PORT||3001;
const databaseURL=process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,

}));
app.use(cookieParser());
app.use(express.json());

const server=app.listen(port,()=>{
    console.log(`server started in http://localhost:${port}`);
});
mongoose.connect(databaseURL)
.then(()=>console.log("DB connection Succesful")).catch(err=>console.log(err.message));





