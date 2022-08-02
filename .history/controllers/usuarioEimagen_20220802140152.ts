import { Request, Response } from "express"
import UsuarioEimagen from "../models/UsuarioEimagen";

const getUsuarioEimagenes=(req:Request,res:Response)=>{
   
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=async(req:Request,res:Response)=>{
    const {idUsuario}=req.params;

    const usuarioEimagenes =await UsuarioEimagen.find({usuario:idUsuario})
    res.json({msg:'GET DE TODAS LAS IMAGENES PERO POR UN SOLO USUARIO',usuarioEimagenes}) 
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId}