"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const EnviarCorreo = (email = null) => {
    //Requerimos el paquete
    //Creamos el objeto de transporte
    var transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'galleryappbechara@gmail.com',
            pass: '120577Dany'
        }
    });
    //creamos el mensaje
    var mensaje = '';
    //creamos el asunto
    var asunto = '';
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
            return info.response;
        }
    });
};
exports.default = EnviarCorreo;
//# sourceMappingURL=RecuperarPassword_20220801142648.js.map