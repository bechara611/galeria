"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const login_1 = require("../controllers/login");
const expressValidator_1 = require("../helpers/expressValidator");
const router = (0, express_1.Router)();
router.get('/', [
    (0, express_validator_1.check)('email', 'PLEASE, INSERT A VALID EMAIL').isEmail(),
    (0, express_validator_1.check)('password', 'PLEASE, INSERT A PASSWORD').not().isEmpty(),
    expressValidator_1.comprobarCampos,
], login_1.getLogin);
exports.default = router;
//# sourceMappingURL=login.js.map