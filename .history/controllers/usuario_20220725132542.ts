import { Request, Response } from "express";

const UsuarioGet=(req:Request,res:Response)=>{
    res.json({msg:'GET DE USUARIOS'})
}

export {UsuarioGet}