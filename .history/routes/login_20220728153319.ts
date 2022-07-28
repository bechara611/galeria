import { Router } from 'express';
import { check } from 'express-validator';
import { getLogin } from '../controllers/login';
import { comprobarCampos } from '../helpers/expressValidator';


const router = Router();

router.get('/',[
    check('email','PLEASE, INSERT A VALID EMAIL').isEmail(),
    comprobarCampos,
],getLogin)

export default router;