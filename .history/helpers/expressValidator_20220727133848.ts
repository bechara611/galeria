import { Request, Response } from "express"
import { validationResult } from "express-validator"
import Usuario from "../models/Usuario";


//este metodo comprueba de forma general los errores de express-validator
const comprobarCampos=(req:Request,res:Response,next)=>{

    const errores= validationResult(req);
    if(!errores.isEmpty()){

       return res.status(400).json(errores)  ;
    }
  next()
}
//metodo para comprobar si el correo existe ya previamente registrado
const comprobarUsuarioCorreo=async(email:any)=>{
  try {
   const usuario = await Usuario.findOne({correo:email.toLowerCase()})
    if(usuario){
      return true
    }
    else{
      return null
    }
  } catch (error) {
    console.log(error)
    return null;
  }
 
}

export {comprobarCampos,comprobarUsuarioCorreo}