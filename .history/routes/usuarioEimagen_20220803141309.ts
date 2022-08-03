import {Router} from 'express';
import { deleteUsuarioImagen, getUsuarioEimagenes, getUsuarioEimagenesPorId } from '../controllers/usuarioEimagen';
import {check} from 'express-validator'
import { comprobarCampos } from '../helpers/expressValidator';
const router= Router();


//obtener todas las imagenes o link de imagenes con respecto a un ID de un usuario
router.get('/',[
    check('idUsuario','Error, USER MongoID not valid').isMongoId(),
    comprobarCampos
],getUsuarioEimagenesPorId)

router.get('/',[
    check('id_imagenes','Error, DATA NOT FOUND').not().isEmpty(),
    comprobarCampos
],deleteUsuarioImagen)

export default router;