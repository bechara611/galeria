import { Router } from 'express';
import { check } from 'express-validator';



const router = Router();

router.post('/',[
    check('email','PLEASE, INSERT A VALID EMAIL').isEmail(),
    check('password','PLEASE, INSERT A PASSWORD').not().isEmpty(),
    comprobarCampos,
],getLogin)

export default router;