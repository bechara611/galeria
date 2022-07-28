import { Router } from 'express';
import { check } from 'express-validator';
import { getLogin } from '../controllers/login';


const router = Router();

router.get('/',[],getLogin)

export default router;