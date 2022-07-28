import { Request, Response } from "express"
import Usuario from "../models/Usuario"

declare global {
    var uidGlobal: any;
  }

const HacerLogin=async (req:Request,res:Response,email:any,password:any)=>{
    
try {
    const usuario= await  Usuario.findOne({email:email,password:password})

    if(usuario){
        uidGlobal=usuario._id
        return usuario
    } else {
        return null
    }
} catch (error) {
    return null
}
   
}

export {HacerLogin}