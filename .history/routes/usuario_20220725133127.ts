import {Router} from 'express';
import { UsuarioGet } from '../controllers/usuario';

const router= Router();

router.get('/',[],UsuarioGet)

export default router;