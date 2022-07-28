import { Router } from 'express';
import { check } from 'express-validator';
import { getLogin } from '../controllers/login';
import { comprobarCampos } from '../helpers/expressValidator';


const router = Router();

router.get('/',[
    check('email').isEmail(),
    comprobarCampos,
],getLogin)

export default router;