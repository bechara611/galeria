import { Request, Response } from "express";
import { comprobarUsuarioCorreo } from "../helpers/expressValidator";
import EnviarCorreo2 from "../helpers/RecuperarPassword";
import Usuario from "../models/Usuario";



//CONTROLADOR PARA TODOS LOS USUARIOS
const UsuariosGet = async (req: Request, res: Response) => {

    try {
        // let correos: Array<string> = [];
        let correos: any = [];
        const Usuarios = await Usuario.find();

        const Total = await Usuario.countDocuments();

        if (Usuarios) {
            //hiciste esto para recorrer la respuesta y guardar solo el correo en un vector que declaraste aparte   
            for (let prop in Usuarios) {
                correos.push(Usuarios[prop].correo)
            }


            res.status(200).json({
                Total,
                correos,
                Usuarios
            })
        }


    } catch (error) {
        res.status(400).json({
            errors: {
                msg: error
            }
        })
    }

}
//CONTROLADOR PARA UN USUARIO EN ESPECIFICO RECIBIENDO EL ID DEL USUARIO
const UsuarioGet = async (req: Request, res: Response) => {

    const { id } = req.params
    const usuario = await Usuario.findById(id);

    if (usuario) {
        res.status(200).json({
            msg: 'Success',
            usuario
        })
    } else {
        return res.status(400).json({ error: { msg: 'User not found' } })
    }


}

//CONTROLADOR PARA REGISTRAR A UN USUARIO 
const UsuarioPost = async (req: Request, res: Response) => {
    //TODO recuerda que debes colocar la propiedad de estado y google
    const { nombre, correo, password } = req.body;
    const existe = await comprobarUsuarioCorreo(correo);
    if (existe) {
        return res.status(400).json({ errors: { msg: 'Email already exists' } })
    }
    try {
        const usuario = new Usuario({
            nombre: nombre.toUpperCase(),
            correo: correo.toLowerCase(),
            password
        });
        await usuario.save();

        res.status(200).json({
            msg: 'Success',
            usuario
        })

    } catch (error) {
        res.status(200).json({
            errors: {
                msg: error
            }
        })
    }


}

//CONTROLADOR PARA COLOCAR INACTIVO A UN USUARIO
const UsuarioDelete =async  (req: Request, res: Response) => {    
    const { id } = req.params
   // const usuario = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true})

   const usuario = await Usuario.findOneAndUpdate({_id:id},{estado:false},{new:true})

    if (usuario) {
        res.status(200).json({
            msg: 'Success-User Deleted',
            usuario
        })
    } else {
        return res.status(400).json({ errors: { msg: 'User not found' } })
    }

}

//CONTROLADOR PARA ACTUALIZAR UN USUARIO
const UsuarioPut = async (req: Request, res: Response) => {
    const { correo, password,nueva_password } = req.body;
    //comprobamos si existe el email

    try {
        const existe = await comprobarUsuarioCorreo(correo);
        if (!existe) {
            return res.status(400).json({ errors: { msg: 'Email not found' } })
        }
     //comprobamos si es la contrasena
        const usuario= await  Usuario.findOne({
            correo:correo.toLowerCase(),
            password:password
         })
         if (!usuario) {
            return res.status(400).json({ errors: { msg: 'INCORRECT PASSWORD' } })
        }
    
        //cambiamos la contrasena
        const usuarioNuevo = await Usuario.findOneAndUpdate({
            correo:correo.toLowerCase(),
            password:password
        },
        {
            password:nueva_password
        },{new:true})
    
       res.status(200).json({
        msg:'SUCCESS',
        usuarioNuevo
       })
    } catch (error) {
        return res.status(400).json({ errors: { msg: `Error en el trycatch del put de change password ${error}` } })
    }
   
}

const RecuperarPassword = async(req: Request, res: Response)=>{
    const {email}= req.query;
 try {
    const existe = await comprobarUsuarioCorreo(email);
    if (!existe) {
        return res.status(400).json({ errors: { msg: 'Email NOT FOUND' } })
    }

    //TODO METODO DE ENVIAR PASSWORD
//METODO DE ENVIAR EL PASSWORD ACTUAL   POR CORREO
    const respuesta= await EnviarCorreo2(email)

    if(respuesta){
        res.status(200).json({
            msg:'The password was send to the email. Please check.',
            email,
            respuesta
           })  
    }(!respuesta){
        return res.status(400).json({ errors: { msg: `INTERNAL ERROR: RECOVERY PASSWORD` } })
    }
   
 } catch (error) {
    return res.status(400).json({ errors: { msg: `Error en el metodo de recuperar el password   ${error}` } })
 }
    
}
export { UsuarioGet, UsuarioPost, UsuarioDelete, UsuarioPut, UsuariosGet,RecuperarPassword }