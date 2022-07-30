import { Router } from 'express';
import { check } from 'express-validator'
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut, UsuariosGet } from '../controllers/usuario';
import { comprobarCampos } from '../helpers/expressValidator';
import { verificarJWT } from '../helpers/JWT';

const router = Router();

//ruta para para obtener todos los usuarios
router.get('/', [], UsuariosGet)
//ruta para obtener informacion de un usuario en especifico
router.get('/:id', [
    //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
        check('id','Incorrect MONGO ID').isMongoId(),
    comprobarCampos,
], UsuarioGet)


//ruta para registrar un usuario
router.post('/', [
    check('nombre', 'Name must have a value.').not().isEmpty(),
    check('password', 'Password must have a value').not().isEmpty(),
    check('correo', 'email must have a correct value').isEmail(),
    comprobarCampos,
], UsuarioPost)


//ruta para borrar un usuario o en su defecto colocar inactivo un usuario
router.delete('/:id', [
    //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
    verificarJWT,    
    check('id','Incorrect MONGO ID').isMongoId(),
    comprobarCampos,
], UsuarioDelete);



//ruta para actualizar un usuario
router.put('/', [
        //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
    //    check('id','Incorrect MONGO ID').isMongoId(),
    check('nombre', 'Name must have a value.').not().isEmpty(),
    check('password', 'Password must have a value').not().isEmpty(),
    check('correo', 'email must have a correct value').isEmail(),
    comprobarCampos,
], UsuarioPut)

export default router;