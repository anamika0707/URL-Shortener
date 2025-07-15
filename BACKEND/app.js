import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config("./.env");
import urlSchema from './src/models/shorturl.model.js';

const app=express();
import {nanoid} from "nanoid";

import connectDB from "./src/config/mongo.config.js"


app.use(express.json());
app.use(express.urlencoded({extended:true})); 


app.post("/api/create",(req,res)=>{
    const {url}=req.body; 
    console.log("Request body:", req.body);
//the curly braces help to destructure the url from the request body mtlb seedhe url ki value mil jaegi
    const shortUrl = nanoid(7); //nanoid generates a unique id of length 7
    const newUrl=new urlSchema({ //ye jo newUrl hai wo ek instance hai humare new data ka aur ye jo hai wo inmemory mein store ho rehta hai
        full_url: url,
        short_url: shortUrl,
    })
    newUrl.save(); //ye save method mongoose ka hai jo data ko database mein store kar deta hai
    // console.log(url);
    res.send(nanoid(7));;
})
app.get("/:id",async (req,res)=>{
    const {id} = req.params; //ye shortUrl humne url mein pass kiya hai
    const url = await urlSchema.findOne({short_url: id}); //ye findOne method mongoose ka hai jo database mein se data ko find kar deta hai
    if(url){
        res.redirect(url.full_url); //agar url nahi mila to full_url par redirect kar do
    }
    else{
        res.status(404).send("NOT Found");
    }
})
app.listen(3000,()=>{
    connectDB();
    console.log("server is running on http://localhost:3000");
})

//GET route--- Redirection 
//POST route-- Create the short url