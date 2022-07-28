import { Request, Response } from "express"
import Usuario from "../models/Usuario"



const HacerLogin=async (req:Request,res:Response,email:any,password:any)=>{
    
try {
    const usuario= await  Usuario.findOne({
       correo:email,
       password:password
    })

    if(usuario){
        //se guarda la variable global que se creo en el index
      
        global.ID_user_mongo=usuario._id;
        return usuario
    } else {
        return null
    }
} catch (error) {
    return null
}
   
}

export {HacerLogin}