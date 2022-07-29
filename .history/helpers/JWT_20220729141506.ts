import JWT from 'jsonwebtoken'
import dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();

const GenerarJWT = (uid: any) => {

    return new Promise((resolve, reject) => {
        const Payload = uid;

        JWT.sign(Payload.toJSON(),process.env.claveJWT, 
            (error,token) => {
            if (error) { return reject(error) }
            else {
                global.TOKEN=token;
                resolve(token)
             }

        }

        )
    })
}

const verificarJWT =(req:Request,res:Response,next)=>{
    try {
         //recibe el token del header
    const Token= req.header('x-token');
    if(!Token){
        return res.status(400).json({
            errors:{
                msg:'TOKEN NOT FOUND'
            }
        })
    }else{
        const payload =JWT.verify(Token,process.env.claveJWT)
        console.log(payload)
        next()
    }
    } catch (error) {
        throw new Error('TOKEN NOT VALID')
    }
   
}
export { GenerarJWT,verificarJWT }