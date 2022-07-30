"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuario_1 = require("../controllers/usuario");
const expressValidator_1 = require("../helpers/expressValidator");
const JWT_1 = require("../helpers/JWT");
const router = (0, express_1.Router)();
//ruta para para obtener todos los usuarios
router.get('/', [], usuario_1.UsuariosGet);
//ruta para obtener informacion de un usuario en especifico
router.get('/:id', [
    //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
    (0, express_validator_1.check)('id', 'Incorrect MONGO ID').isMongoId(),
    expressValidator_1.comprobarCampos,
], usuario_1.UsuarioGet);
//ruta para registrar un usuario
router.post('/', [
    (0, express_validator_1.check)('nombre', 'Name must have a value.').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password must have a value').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'email must have a correct value').isEmail(),
    expressValidator_1.comprobarCampos,
], usuario_1.UsuarioPost);
//ruta para borrar un usuario o en su defecto colocar inactivo un usuario
router.delete('/:id', [
    //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
    JWT_1.verificarJWT,
    (0, express_validator_1.check)('id', 'Incorrect MONGO ID').isMongoId(),
    expressValidator_1.comprobarCampos,
], usuario_1.UsuarioDelete);
//ruta para actualizar un usuario
router.put('/', [
    //TODO luego de tener todos los checks del mongoID y eso debes habilitar aca y en todos la comprobacion
    //    check('id','Incorrect MONGO ID').isMongoId(),
    (0, express_validator_1.check)('nombre', 'Name must have a value.').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password must have a value').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'email must have a correct value').isEmail(),
    (0, express_validator_1.check)('nueva_password', 'New password must have a value').not().isEmpty(),
    expressValidator_1.comprobarCampos,
], usuario_1.UsuarioPut);
router.post('/recuperar/', [
    (0, express_validator_1.check)('email', 'email must have a correct value').isEmail(),
    expressValidator_1.comprobarCampos,
], usuario_1.RecuperarPassword);
exports.default = router;
//# sourceMappingURL=usuario.js.map