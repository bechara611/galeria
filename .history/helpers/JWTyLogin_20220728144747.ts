import { Request, Response } from "express"
import Usuario from "../models/Usuario"

const HacerLogin=async (req:Request,res:Response,email:any,password:any)=>{

    const usuario= await  Usuario.findOne({email:email,password:password})

    if(usuario){
        return usuario
    } else {
        return null
    }
}

export {HacerLogin}