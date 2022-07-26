import {Router} from 'express';
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut } from '../controllers/usuario';

const router= Router();

router.get('/',[],UsuarioGet)

router.post('/',[],UsuarioPost)

router.delete('/',[],UsuarioDelete);

router.put('/',[],UsuarioPut)

export default router;