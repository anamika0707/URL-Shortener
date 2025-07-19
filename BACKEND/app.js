import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config("./.env");
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";


const app=express();
import {nanoid} from "nanoid";

import connectDB from "./src/config/mongo.config.js"


app.use(express.json());
app.use(express.urlencoded({extended:true})); 


app.use("/api/create",short_url)

app.get("/:id",redirectFromShortUrl);

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB();
    console.log("server is running on http://localhost:3000");
})

//GET route--- Redirection 
//POST route-- Create the short url