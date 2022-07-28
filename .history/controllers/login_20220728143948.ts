import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";

const getLogin=async(req:Request,res:Response)=>{

    const {email,password}=req.query


    //comprobar primero si el correo existe o no. 
   const existeCorreo=await  comprobarUsuarioCorreo(email);
   if (!existeCorreo) {
    
   }
    res.status(200).json({
        msg:'Success get login',
        email,
        password
    })
}

export {getLogin}