import {Router} from 'express';
import { UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPut, UsuariosGet } from '../controllers/usuario';

const router= Router();

router.get('/',[],UsuariosGet)

router.get('/:id',[],UsuarioGet)

router.post('/',[],UsuarioPost)

router.delete('/:id',[],UsuarioDelete);

router.put('/:id',[],UsuarioPut)

export default router;