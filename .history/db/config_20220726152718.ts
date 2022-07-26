import mongoose from "mongoose";

const conectarDB=async()=>{
    try {
        await mongoose.connect(process.env.link)
        console.log('DB CONNECTED')
    } catch (error) {
        throw new Error(error);
        
    }
 
}

export {conectarDB}