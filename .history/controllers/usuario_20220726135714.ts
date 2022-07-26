import { Request, Response } from "express";

const UsuarioGet=(req:Request,res:Response)=>{


    res.json({msg:'GET DE USUARIOS'})
}

const UsuarioPost=(req:Request,res:Response)=>{

    const {nombre,correo,password}= req.body;
    res.json({msg:'POST DE USUARIOS',
        nombre:nombre.toUpperCase(),
        correo:correo.toLowerCase(),
        password
})
}

const UsuarioDelete=(req:Request,res:Response)=>{
    res.json({msg:'DELETE DE USUARIOS'})
}

const UsuarioPut=(req:Request,res:Response)=>{
    res.json({msg:'PUT DE USUARIOS'})
}
export {UsuarioGet,UsuarioPost,UsuarioDelete,UsuarioPut}