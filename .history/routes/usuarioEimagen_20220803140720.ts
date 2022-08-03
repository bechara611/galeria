import {Router} from 'express';
import { getUsuarioEimagenes, getUsuarioEimagenesPorId } from '../controllers/usuarioEimagen';
import {check} from 'express-validator'
import { comprobarCampos } from '../helpers/expressValidator';
const router= Router();

//obtener todas las imagenes con su respectivo usuario
router.get('/',[],getUsuarioEimagenes)

//obtener todas las imagenes o link de imagenes con respecto a un ID de un usuario
router.get('/',[
    check('idUsuario','Error, USER MongoID not valid').isMongoId(),
    comprobarCampos
],getUsuarioEimagenesPorId)

export default router;