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
            else {resolve(token) }

        }

        )
    })
}

const verificarJWT =(req:Request,res:Response,token:any,next)=>{
    //recibe el token del header
    const Token= req.header('x-token');
    if(!Token){
        return res.status(400).json({
            errors:{
                msg:'TOKEN NOT FOUND'
            }
        })
    }else{
        JWT.verify(Token,process.env.claveJWT)
        next()
    }
}
export { GenerarJWT,verificarJWT }