"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobarCampos = void 0;
const express_validator_1 = require("express-validator");
//este metodo comprueba de forma general los errores de express-validator
const comprobarCampos = (req, res, next) => {
    const errores = (0, express_validator_1.validationResult)(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    next();
};
exports.comprobarCampos = comprobarCampos;
//# sourceMappingURL=expressValidator.js.map