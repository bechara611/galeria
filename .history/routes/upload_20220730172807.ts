import { Router } from 'express';
import { check } from 'express-validator';
import { postUpload } from '../controllers/upload';
import { comprobarCampos } from '../helpers/expressValidator';



const router = Router();

router.post('/',[
    check('id_usuario','PLEASE, WE NEED THE USER ID').not().isEmpty(),
    comprobarCampos,
],postUpload)

export default router;