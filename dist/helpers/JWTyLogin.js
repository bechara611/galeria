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
exports.HacerLogin = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
const HacerLogin = (req, res, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield Usuario_1.default.findOne({
            correo: email,
            password: password
        });
        if (usuario) {
            //se guarda la variable global que se creo en el index
            global.ID_user_mongo = usuario._id;
            //hay que generar un JWT al realizar un login exitoso
            //retornamos el usuario
            return usuario;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
});
exports.HacerLogin = HacerLogin;
//# sourceMappingURL=JWTyLogin.js.map