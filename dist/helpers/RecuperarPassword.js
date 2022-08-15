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
const Usuario_1 = __importDefault(require("../models/Usuario"));
const EnviarCorreo2 = (email = null) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const usuario = yield Usuario_1.default.findOne({ correo: email });
            //Requerimos el paquete
            var transporter = nodemailer_1.default.createTransport({
                service: 'Hotmail',
                auth: {
                    user: 'galleryappbechara@hotmail.com',
                    pass: 'wtlnpdyvrmrxiqnf'
                }
            });
            //creamos el mensaje
            var mensaje = `
            ******************YOUR PASSWORD FOR GALLERY APP********************
                    ${usuario.password}
            *******************************************************************      
    
            Ing. Dany Bechara.
            `;
            //creamos el asunto
            var asunto = 'RECOVERY PASSWORD FROM GALLERY APP';
            //Creamos las opciones
            var mailOptions = {
                from: 'GALLERY APP',
                to: email,
                subject: asunto,
                text: mensaje,
                html: `
                <div style="background:gray;min-width: 100vw; display:flex;justify-content: center;
                text-align: center;
                ">
                <p style="color:pink; justify-content:center";
                text-align: center;
                ;>RECOVERY PASSWORD</p>
                </div>
                <h1 style=" text-align: center;;>Gallery App</h1>
                <h3 style="color:red">YOUR PASSWORD IS:<p style="color:blue">${usuario.password}</p></h3>
                <p>If you didn't request this code, you can ignore this email. Someone else may have entered your email address by mistake.
                <br>
                <br>
                </p>
                <br>
                <br>
                <br>
                <p>Thank you,
                Dany Bechara</p>
                <div style="background:gray;min-width: 100vw; display:flex; justify-content: center; text-align: center;">
                <p style="color:white; justify-content:center";
                text-align: center;
                font-size:15px;
                >Gallery App</p>
                </div>`
            };
            //ejecutamos 
            yield transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    // console.log(error)
                    reject(null);
                }
                else {
                    //  console.log(info)
                    //return info
                    resolve(true);
                }
            });
            // return true
        }
        catch (error) {
            return null;
        }
    }));
});
exports.default = EnviarCorreo2;
//# sourceMappingURL=RecuperarPassword.js.map