import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";
import Usuario from "../models/Usuario";

//CONTROLADOR PARA TODOS LOS USUARIOS
const UsuariosGet = async (req: Request, res: Response) => {

    try {
        let correos: [any]
        const Usuarios = await Usuario.find();
        const Total = await Usuario.countDocuments();

        if (Usuarios) {
            for(let prop in Usuarios)
            {
              console.log(Usuarios[prop].nombre)
            }
             res.status(200).json({
                Total,
                Usuarios
            })
        }


    } catch (error) {
        res.status(400).json({
            Error: {
                msg: error
            }
        })
    }

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
    const existe = await comprobarUsuarioCorreo(correo);
    if (existe) {
        return res.status(400).json({ error: { msg: 'Email already exists' } })
    }
    try {
        const usuario = new Usuario({
            nombre: nombre.toUpperCase(),
            correo: correo.toLowerCase(),
            password
        });
        await usuario.save();

        res.json({
            msg: 'Success',
            usuario
        })

    } catch (error) {
        res.status(200).json({
            Error: {
                msg: error
            }
        })
    }


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