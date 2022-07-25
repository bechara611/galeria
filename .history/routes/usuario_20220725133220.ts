import {Router} from 'express';
import { UsuarioGet } from '../controllers/usuario';

const routerUsuario= Router();

routerUsuario.get('/',[],UsuarioGet)

export default routerUsuario;