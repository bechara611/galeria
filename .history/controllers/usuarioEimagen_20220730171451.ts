import { Request, Response } from "express"

const getUsuarioEimagenes=(req:Request,res:Response)=>{
    const {archivo} = req.files
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({msg:'No files were uploaded.'});
        return;
      }
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=(req:Request,res:Response)=>{
    const {idUsuario}=req.params;
    res.json({msg:'GET DE TODAS LAS IMAGENES PERO POR UN SOLO USUARIO',idUsuario}) 
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId}