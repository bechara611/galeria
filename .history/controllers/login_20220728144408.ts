import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";

const getLogin=async(req:Request,res:Response)=>{

    const {email,password}=req.query


    //comprobar primero si el correo existe o no. 
   const existeCorreo=await  comprobarUsuarioCorreo(email);
   if (!existeCorreo) {
    return res.status(400).json({
        Error: {
            msg: 'USER NOT FOUND'
        }
    })
   }

   //ahora que el correo existe, vamos a comprobar y retornar la informacion del usuario con sus datos
   //con el helper de login y al mismo tiempo en este se general el JWT
   
    res.status(200).json({
        msg:'Success get login',
        email,
        password
    })
}

export {getLogin}