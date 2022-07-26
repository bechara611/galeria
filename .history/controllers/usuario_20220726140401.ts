import { Request, Response } from "express";

const UsuariosGet=(req:Request,res:Response)=>{


    res.json({msg:'GET DE USUARIOS'})
}

const UsuarioGet=(req:Request,res:Response)=>{


    res.json({msg:'GET DE USUARIOS'})
}

const UsuarioPost=(req:Request,res:Response)=>{
    //TODO recuerda que debes colocar la propiedad de estado y google
    const {nombre,correo,password}= req.body;
    res.json({msg:'POST DE USUARIOS',
        nombre:nombre.toUpperCase(),
        correo:correo.toLowerCase(),
        password
})
}

const UsuarioDelete=(req:Request,res:Response)=>{
    const {id}=req.params
    res.json({msg:'DELETE DE USUARIOS',
    id
})
}

const UsuarioPut=(req:Request,res:Response)=>{
    const {nombre,correo,password}= req.body;
    res.json({msg:'PUT DE USUARIOS'})
}
export {UsuarioGet,UsuarioPost,UsuarioDelete,UsuarioPut,UsuariosGet}