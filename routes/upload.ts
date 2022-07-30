import { Router } from 'express';
import { check } from 'express-validator';
import { postUpload } from '../controllers/upload';
import { comprobarCampos } from '../helpers/expressValidator';
import { verificarJWT } from '../helpers/JWT';



const router = Router();

router.post('/',[
    verificarJWT,
    comprobarCampos,
],postUpload)

export default router;