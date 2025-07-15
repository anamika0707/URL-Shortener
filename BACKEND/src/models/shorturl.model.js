import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema({
    full_url:{
        type: String,
        required: true
    },
    short_url:{
        type: String,
        required: true,
        index:true,
        unique: true // this will ensure that the short url is unique 
    },
    clicks:{
        type: Number,
        default: 0,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      
    }

}); 


const shortUrl=mongoose.model("shortUrl",shortUrlSchema);
export default shortUrl;