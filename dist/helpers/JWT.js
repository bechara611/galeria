"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarJWT = exports.GenerarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const GenerarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const Payload = { uid };
        jsonwebtoken_1.default.sign(Payload, process.env.claveJWT, (error, token) => {
            if (error) {
                return reject(error);
            }
            else {
                global.TOKEN = token;
                resolve(token);
            }
        });
    });
};
exports.GenerarJWT = GenerarJWT;
const verificarJWT = (req, res, next) => {
    try {
        //recibe el token del header
        const Token = req.header('x-token');
        if (!Token) {
            return res.status(400).json({
                errors: {
                    msg: 'TOKEN NOT FOUND'
                }
            });
        }
        else {
            const payload = jsonwebtoken_1.default.verify(Token, process.env.claveJWT);
            //   console.log(payload.uid)
            next();
        }
    }
    catch (error) {
        return res.status(400).json({
            errors: {
                msg: 'TOKEN NOT VALID'
            }
        });
    }
};
exports.verificarJWT = verificarJWT;
//# sourceMappingURL=JWT.js.map