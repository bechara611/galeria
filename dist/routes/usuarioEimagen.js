"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioEimagen_1 = require("../controllers/usuarioEimagen");
const express_validator_1 = require("express-validator");
const expressValidator_1 = require("../helpers/expressValidator");
const router = (0, express_1.Router)();
//obtener todas las imagenes con su respectivo usuario
router.get('/', [], usuarioEimagen_1.getUsuarioEimagenes);
//obtener todas las imagenes o link de imagenes con respecto a un ID de un usuario
router.get('/:idUsuario', [
    (0, express_validator_1.check)('idUsuario', 'Error, USER MongoID not valid').isMongoId(),
    expressValidator_1.comprobarCampos
], usuarioEimagen_1.getUsuarioEimagenesPorId);
exports.default = router;
//# sourceMappingURL=usuarioEimagen.js.map