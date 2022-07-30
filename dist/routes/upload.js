"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = require("../controllers/upload");
const expressValidator_1 = require("../helpers/expressValidator");
const JWT_1 = require("../helpers/JWT");
const router = (0, express_1.Router)();
router.post('/', [
    JWT_1.verificarJWT,
    expressValidator_1.comprobarCampos,
], upload_1.postUpload);
exports.default = router;
//# sourceMappingURL=upload.js.map