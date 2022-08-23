import {Router} from 'express';
import { deleteUsuarioImagen, getUsuarioEimagenes, getUsuarioEimagenesPorId } from '../controllers/usuarioEimagen';
import {check} from 'express-validator'
import { comprobarCampos } from '../helpers/expressValidator';
const router= Router();


//obtener todas las imagenes o link de imagenes con respecto a un ID de un usuario
router.post('/',[
    // check('idUsuario2','Error, USER MongoID not valid').isMongoId(),
    comprobarCampos
],getUsuarioEimagenesPorId)

router.delete('/',[
    check('id_imagenes','Error, DATA NOT FOUND ( id_imagenes )').not().isEmpty(),
    comprobarCampos
],deleteUsuarioImagen)

export default router;