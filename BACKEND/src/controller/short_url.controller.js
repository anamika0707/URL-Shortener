import { createShortUrlWithoutUser, createShortUrlWithUser } from '../services/short_url.service.js';
import { getShortUrl } from '../dao/short_url.js';
export const createShortUrl = async (req, res) => {
    const {url}=req.body;
    const shortUrl=await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + "/"+ shortUrl);
   
}

export const redirectFromShortUrl = async (req, res) => {
    const {id} = req.params; // Extract the short URL from the request parameters
    const url =await getShortUrl(id);
    res.redirect(url.full_url);
}