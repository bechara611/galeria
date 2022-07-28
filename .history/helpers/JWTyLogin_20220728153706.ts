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


        //hay que generar un JWT al realizar un login exitoso

        //TODO JWT
        //retornamos el usuario
        return usuario
    } else {
        return null
    }
} catch (error) {
    return null
}
   
}

export {HacerLogin}