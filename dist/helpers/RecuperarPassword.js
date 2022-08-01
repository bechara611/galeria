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
const nodemailer_1 = __importDefault(require("nodemailer"));
const EnviarCorreo = (email = null) => __awaiter(void 0, void 0, void 0, function* () {
    //Requerimos el paquete
    const transporter = nodemailer_1.default.createTransport({
        service: "Hotmail",
        auth: {
            user: "galleryappbechara@hotmail.com",
            pass: "120577Dany"
        }
    });
    //creamos el mensaje
    var mensaje = 'Mensaje desde node';
    //creamos el asunto
    var asunto = 'MENSAJE DESDE NODE';
    //Creamos las opciones
    var mailOptions = {
        from: 'galleryappbechara@gmail.com',
        to: email,
        subject: asunto,
        text: mensaje
    };
    //ejecutamos 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(info.response);
            return info.response;
        }
    });
});
exports.default = EnviarCorreo;
//# sourceMappingURL=RecuperarPassword.js.map