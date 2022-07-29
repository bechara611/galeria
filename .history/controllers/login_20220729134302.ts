import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";
import { GenerarJWT } from "../helpers/JWT";
import { HacerLogin } from "../helpers/JWTyLogin";

const getLogin=async(req:Request,res:Response)=>{

    const {email,password}=req.query


    //comprobar primero si el correo existe o no. 
   const existeCorreo=await  comprobarUsuarioCorreo(email);
   if (!existeCorreo) {
    return res.status(400).json({
        errors: {
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
        errors: {
            msg: 'INCORRECT PASSWORD'
        }
    })
   }
   const Token = await GenerarJWT(global.ID_user_mongo)

   
    res.status(200).json({
        msg:'Success get login',
        idGlobal:global.ID_user_mongo,
        usuario,
        Token
  
    })
}

export {getLogin}