import {nanoid} from "nanoid";
export const generateNanoId=(length)=>{
    return nanoid(8); // Generates a unique ID of length 8
}