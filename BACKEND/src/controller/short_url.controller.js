import { createShortUrlWithoutUser, createShortUrlWithUser } from '../services/short_url.service.js';
import { getShortUrl } from '../dao/short_url.js';
import wrapAsync from '../utils/wrapAsync.js';
export const createShortUrl = wrapAsync(async (req, res,next) => {
    
    const {url}=req.body;
    const shortUrl=await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + "/"+ shortUrl);
   
})

export const redirectFromShortUrl =wrapAsync( async (req, res) => {
   
    const {id} = req.params; // Extract the short URL from the request parameters
    const url =await getShortUrl(id);
    if(!url) throw new Error("Short URL not found");
    res.redirect(url.full_url);
    
})