import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config("./.env");
const app=express();
import {nanoid} from "nanoid";

import connectDB from "./src/config/mongo.config.js"


app.use(express.json());
app.use(express.urlencoded({extended:true})); 


app.post("/api/create",(req,res)=>{
    const {url}=req.body;
    console.log(url);
    res.send(nanoid(7));;
})

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on http://localhost:3000");
})

//GET route--- Redirection 
//POST route-- Create the short url