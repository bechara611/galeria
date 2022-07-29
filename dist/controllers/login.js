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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = void 0;
const expressValidator_1 = require("../helpers/expressValidator");
const JWT_1 = require("../helpers/JWT");
const JWTyLogin_1 = require("../helpers/JWTyLogin");
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.query;
    //comprobar primero si el correo existe o no. 
    const existeCorreo = yield (0, expressValidator_1.comprobarUsuarioCorreo)(email);
    if (!existeCorreo) {
        return res.status(400).json({
            errors: {
                msg: 'USER NOT FOUND'
            }
        });
    }
    //ahora que el correo existe, vamos a comprobar y retornar la informacion del usuario con sus datos
    //con el helper de login y al mismo tiempo en este se general el JWT
    const usuario = yield (0, JWTyLogin_1.HacerLogin)(req, res, email, password);
    if (!usuario) {
        //SI EL USUARIO Y LA CONTRASENA NO SON, ENTONCES DEVOLVERA ESE MENSAJE
        return res.status(400).json({
            errors: {
                msg: 'INCORRECT PASSWORD'
            }
        });
    }
    const Token = yield (0, JWT_1.GenerarJWT)(global.ID_user_mongo);
    res.status(200).json({
        msg: 'Success get login',
        idGlobal: global.ID_user_mongo,
        usuario,
        Token
    });
});
exports.getLogin = getLogin;
//# sourceMappingURL=login.js.map