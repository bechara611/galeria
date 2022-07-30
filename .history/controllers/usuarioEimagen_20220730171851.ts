import { Request, Response } from "express"

const getUsuarioEimagenes=(req:Request,res:Response)=>{
    const {archivo} = req.files;

    console.log(archivo)
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({msg:'No files were uploaded.'});
        return;
      }
      if (!req.files.archivo) {
        res.status(400).json({msg:'Falta archivo'});
        return;
      }
  //  console.log(imagenes)
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS',archivo})
}

const getUsuarioEimagenesPorId=(req:Request,res:Response)=>{
    const {idUsuario}=req.params;
    res.json({msg:'GET DE TODAS LAS IMAGENES PERO POR UN SOLO USUARIO',idUsuario}) 
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId}