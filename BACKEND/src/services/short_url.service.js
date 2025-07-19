import {generateNanoId} from "../utils/helper.js";
import urlSchema from '../models/shorturl.model.js';
import { saveShortUrl } from '../dao/short_url.js';
export const createShortUrlWithoutUser=async (url)=>{
const shortUrl = generateNanoId(7); // Generate a unique short URL
   await saveShortUrl(shortUrl,url); // Save the URL to the database
   return shortUrl; // Return the generated short URL
}

export const createShortUrlWithUser=async (url,userId)=>{
const shortUrl = generateNanoId(7); // Generate a unique short URL
   await saveShortUrl(url, shortUrl,userId); // Save the URL to the database
   return shortUrl; // Return the generated short URL
}

