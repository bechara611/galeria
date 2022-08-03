import { Request, Response } from "express"
import { validationResult } from "express-validator"
import Usuario from "../models/Usuario";
import UsuarioEimagen from "../models/UsuarioEimagen";


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


const comprobarImagenExiste=async(id_imagenes:any=[''])=>{

  const promesa= new Promise((resolve,reject)=>{
    let existe=false
    let comprobarSiExisten
    id_imagenes.forEach(async(element) => {
    //  console.log(element)
     comprobarSiExisten =await UsuarioEimagen.find({img:element})
     
    }


  })
   return promesa

 
 
}
// let existe:any=null;
// let comprobarSiExisten=null;
// id_imagenes.forEach(async(element,index) => {
//   comprobarSiExisten =await UsuarioEimagen.findOne({img:element})
//  if(!comprobarSiExisten){ 
//   console.log(comprobarSiExisten);
//   existe=null
//   return
//   }else{
//     existe=true
//   }

// });
export {comprobarCampos,comprobarUsuarioCorreo,comprobarImagenExiste}