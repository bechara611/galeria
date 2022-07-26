import { Request, Response } from "express"

const getUsuarioEimagenes=(req:Request,res:Response)=>{
res.json({msg:'GET DE TODAS LAS IMAGENES Y USUARIOS'})
}

export {getUsuarioEimagenes}