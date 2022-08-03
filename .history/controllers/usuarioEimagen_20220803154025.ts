import { Request, Response } from "express"
import { borrarVariasImagenCloudinaryPromesa } from "../helpers/BorrarImagenCloudinary";
import UsuarioEimagen from "../models/UsuarioEimagen";
import { AnyExpression } from 'mongoose';
import { comprobarImagenExiste } from "../helpers/expressValidator";

const getUsuarioEimagenes=(req:Request,res:Response)=>{
   
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=async(req:Request,res:Response)=>{
    const {idUsuario}=req.body;
    //const {id_imagenes}=req.body;

    const usuarioEimagenes =await UsuarioEimagen.find({usuario:idUsuario}).populate('usuario')

    if(usuarioEimagenes.length===0){
      return res.status(400).json({
        errors: {
            msg: 'DATA NOT FOUND',

        },
        usuarioEimagenes
    })

    }
    res.status(200).json({msg:'SUCCESS',usuarioEimagenes}) 
}

const deleteUsuarioImagen=async(req:Request,res:Response)=>{
   const {id_imagenes}=req.body;
  
   const existe = await comprobarImagenExiste(id_imagenes)
                .then((data)=>{
                  console.log('ACA')
                  return true})
                .catch((error)=>{
                  console.log('reject')
                  return null})
if(!existe){
  return res.status(400).json({
    errors: {
        msg: 'ERROR-DELETE IMG2',

    }
  
})
}
  
 
   const resultado = await borrarVariasImagenCloudinaryPromesa(id_imagenes)
                  .then((data)=>{return data})
                  .catch((error)=>{return error})

if(!resultado){
  return res.status(400).json({
    errors: {
        msg: 'ERROR-DELETE IMG',

    }
  
})
}

id_imagenes.forEach(async(element,index) => {
  const BorrarDelModelo =await UsuarioEimagen.findOneAndDelete({img:element})
});


res.status(200).json({msg:'IMG DELETED',resultado})
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId,deleteUsuarioImagen}