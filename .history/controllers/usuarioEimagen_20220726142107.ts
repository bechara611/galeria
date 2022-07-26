import { Request, Response } from "express"

const getUsuarioEimagenes=(req:Request,res:Response)=>{
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

const getUsuarioEimagenesPorId=(req:Request,res:Response)=>{
    const {id}=req.params;
    res.json({msg:'GET DE TODAS LAS IMAGENES PERO POR UN SOLO USUARIO',id}) 
}

export {getUsuarioEimagenes,getUsuarioEimagenesPorId}