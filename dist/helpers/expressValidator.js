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
exports.comprobarImagenExiste = exports.comprobarUsuarioCorreo = exports.comprobarCampos = void 0;
const express_validator_1 = require("express-validator");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const UsuarioEimagen_1 = __importDefault(require("../models/UsuarioEimagen"));
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
//   let existe=false
//   id_imagenes.forEach(async(element) => {
//   //  console.log(element)
//    const comprobarSiExisten =await UsuarioEimagen.find({img:element})
//    console.log(comprobarSiExisten)
//    if(comprobarSiExisten){existe=true}
//   }
//   if(existe){resolve(true)} else{reject(null)}
// })
//  return promesa
const comprobarImagenExiste = (id_imagenes = []) => __awaiter(void 0, void 0, void 0, function* () {
    var comprobar = 0;
    for (var i = 0; i < id_imagenes.length; i++) {
        const comprobarSiExisten = yield UsuarioEimagen_1.default.findOne({ img: id_imagenes[i] });
        if (comprobarSiExisten) {
            comprobar = 1;
        }
        if (!comprobarSiExisten) {
            comprobar = 0;
            return;
        }
    }
    if (comprobar == 0) {
        return null;
    }
    else {
        return true;
    }
});
exports.comprobarImagenExiste = comprobarImagenExiste;
//# sourceMappingURL=expressValidator.js.map