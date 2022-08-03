import { Request, Response } from "express"
import { borrarVariasImagenCloudinaryPromesa } from "../helpers/BorrarImagenCloudinary";
import UsuarioEimagen from "../models/UsuarioEimagen";

const getUsuarioEimagenes=(req:Request,res:Response)=>{
   
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=async(req:Request,res:Response)=>{
    const {idUsuario}=req.body;
    //const {id_imagenes}=req.body;

    const usuarioEimagenes =await UsuarioEimagen.find({usuario:idUsuario}).populate('usuario')

    if(usuarioEimagenes.length===0){
      return res.status(400).json({msg:'NO DATA',usuarioEimagenes}) 
    }
    res.json({msg:'SUCCESS',usuarioEimagenes}) 
}

const deleteUsuarioImagen=async(req:Request,res:Response)=>{
   const {id_imagenes}=req.body;

   const resultado = await borrarVariasImagenCloudinaryPromesa(id_imagenes)
                  .then((data)=>{return data})
                  .catch((error)=>{return error})

if(!resultado){

}
res.status(200).json({msg:'ok',resultado})
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId,deleteUsuarioImagen}