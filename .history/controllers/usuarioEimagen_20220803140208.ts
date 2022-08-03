import { Request, Response } from "express"
import UsuarioEimagen from "../models/UsuarioEimagen";

const getUsuarioEimagenes=(req:Request,res:Response)=>{
   
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=async(req:Request,res:Response)=>{
    const {idUsuario}=req.params;
    const {id_imagenes}=req.body;

    const usuarioEimagenes =await UsuarioEimagen.find({usuario:idUsuario}).populate('usuario')

    if(usuarioEimagenes.length===0){
      return res.json({msg:'NO DATA',usuarioEimagenes}) 
    }
    res.json({msg:'SUCCESS',id_imagenes,usuarioEimagenes}) 
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId}