import {Router} from 'express';
import {check} from 'express-validator'
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut, UsuariosGet } from '../controllers/usuario';
import { comprobarCampos } from '../helpers/expressValidator';

const router= Router();

//ruta para para obtener todos los usuarios
router.get('/',[],UsuariosGet)
//ruta para obtener informacion de un usuario en especifico
router.get('/:id',[
    check('id','DEBE SER UN ID DE MONGO').not().isMongoId(),
    comprobarCampos,
],UsuarioGet)
//ruta para registrar un usuario
router.post('/',[
    check('nombre','EL NOMBRE NO PUEDE ESTAR VACIO').not().isEmpty(),
    comprobarCampos,
],UsuarioPost)
//ruta para borrar un usuario o en su defecto colocar inactivo un usuario
router.delete('/:id',[],UsuarioDelete);
//ruta para actualizar un usuario
router.put('/:id',[],UsuarioPut)

export default router;