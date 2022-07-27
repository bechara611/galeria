import { Request, Response } from "express";
import Usuario from "../models/Usuario";

//CONTROLADOR PARA TODOS LOS USUARIOS
const UsuariosGet = (req: Request, res: Response) => {


    res.json({ msg: 'GET DE USUARIOS' })
}
//CONTROLADOR PARA UN USUARIO EN ESPECIFICO RECIBIENDO EL ID DEL USUARIO
const UsuarioGet = (req: Request, res: Response) => {

    const { id } = req.params
    res.json({ msg: 'GET DE USUARIO EN ESPECIFICO', id })
}

//CONTROLADOR PARA REGISTRAR A UN USUARIO 
const UsuarioPost = async (req: Request, res: Response) => {
    //TODO recuerda que debes colocar la propiedad de estado y google
    const { nombre, correo, password } = req.body;

    const usuario = new Usuario({
        nombre,
        correo,
        password
    });
   await usuario.save();
    
    res.json({
        msg: 'POST DE USUARIOS',
        nombre: nombre.toUpperCase(),
        correo: correo.toLowerCase(),
        password
    })
}

//CONTROLADOR PARA COLOCAR INACTIVO A UN USUARIO
const UsuarioDelete = (req: Request, res: Response) => {
    const { id } = req.params
    res.json({
        msg: 'DELETE DE USUARIOS',
        id
    })
}

//CONTROLADOR PARA ACTUALIZAR UN USUARIO
const UsuarioPut = (req: Request, res: Response) => {
    const { nombre, correo, password } = req.body;
    const { id } = req.params
    res.json({
        msg: 'PUT DE USUARIOS',
        nombre: nombre.toUpperCase(),
        correo: correo.toLowerCase(),
        password,
        id
    })
}
export { UsuarioGet, UsuarioPost, UsuarioDelete, UsuarioPut, UsuariosGet }