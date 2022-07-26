import {Router} from 'express';
import { getUsuarioEimagenes, getUsuarioEimagenesPorId } from '../controllers/usuarioEimagen';

const router= Router();

//obtener todas las imagenes con su respectivo usuario
router.get('/',[],getUsuarioEimagenes)

//obtener todas las imagenes o link de imagenes con respecto a un ID de un usuario
router.get('/:idUsuario',[],getUsuarioEimagenesPorId)

export default router;