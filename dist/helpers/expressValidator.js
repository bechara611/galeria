"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobarUsuarioCorreo = exports.comprobarCampos = void 0;
const express_validator_1 = require("express-validator");
const Usuario_1 = __importDefault(require("../models/Usuario"));
//este metodo comprueba de forma general los errores de express-validator
const comprobarCampos = (req, res, next) => {
    const errores = (0, express_validator_1.validationResult)(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    next();
};
exports.comprobarCampos = comprobarCampos;
//metodo para comprobar si el correo existe ya previamente registrado
const comprobarUsuarioCorreo = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield Usuario_1.default.findOne({ correo: email.toLowerCase() });
        if (usuario) {
            return true;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.comprobarUsuarioCorreo = comprobarUsuarioCorreo;
//# sourceMappingURL=expressValidator.js.map