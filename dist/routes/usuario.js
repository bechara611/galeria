"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.get('/', [], usuario_1.UsuarioGet);
exports.default = router;
//# sourceMappingURL=usuario.js.map