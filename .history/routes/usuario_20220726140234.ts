import {Router} from 'express';
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut, UsuariosGet } from '../controllers/usuario';

const router= Router();

//ruta para para obtener todos los usuarios
router.get('/',[],UsuariosGet)
//ruta para obtener informacion de un usuario en especifico
router.get('/:id',[],UsuarioGet)
//ruta para registrar un usuario
router.post('/',[],UsuarioPost)
//ruta para borrar un usuario o en su defecto colocar inactivo un usuario
router.delete('/:id',[],UsuarioDelete);
//ruta para actualizar un usuario
router.put('/:id',[],UsuarioPut)

export default router;