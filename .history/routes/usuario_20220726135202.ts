import {Router} from 'express';
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut } from '../controllers/usuario';

const router= Router();

router.get('/',[],UsuarioGet)

router.post('/',[],UsuarioPost)

router.delete('/:id',[],UsuarioDelete);

router.put('/:id',[],UsuarioPut)

export default router;