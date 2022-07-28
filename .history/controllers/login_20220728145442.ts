import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";
import { HacerLogin } from "../helpers/JWTyLogin";

const getLogin=async(req:any,res:Response)=>{

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
   const usuario= await HacerLogin(req,res,email,password)

   if(!usuario){
    //SI EL USUARIO Y LA CONTRASENA NO SON, ENTONCES DEVOLVERA ESE MENSAJE
    return res.status(400).json({
        Error: {
            msg: 'INCORRECT PASSWORD'
        }
    })
   }
   req.uid=usuario.uid;
    res.status(200).json({
        msg:'Success get login',
        email,
        password,
        usuario
    })
}

export {getLogin}