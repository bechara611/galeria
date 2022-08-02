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
exports.postUpload = void 0;
const JWT_1 = require("../helpers/JWT");
const UsuarioEimagen_1 = __importDefault(require("../models/UsuarioEimagen"));
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config(process.env.CLOUDINARY_URL);
const postUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                errors: {
                    msg: 'NOT FILE WERE UPLOADED'
                }
            });
        }
        if (!req.files.imagenes) {
            return res.status(400).json({
                errors: {
                    msg: 'IMAGENES NOT FOUND'
                }
            });
        }
        const { imagenes } = req.files;
        const token = req.header('x-token');
        var img = '';
        //-----------------------------------------------------------------------------------------
        //IMPORTANT VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
        const Payload = yield (0, JWT_1.verificarYretornarJWT)(token);
        // console.log(Payload)
        //-----------------------------------------------------------------------------------------
        // ACA POR CADA IMAGEN QUE SE HAYA CARGADO AL REQ.FILES, se va a ejecutar el codigo de cloudinary
        //si hay mas de un archivo....
        if (Object.keys(req.files).length > 1) {
            for (let imagen in imagenes) {
                const respuesta = yield cloudinary_1.default.v2.uploader.upload(imagenes[imagen].tempFilePath)
                    .then((data) => __awaiter(void 0, void 0, void 0, function* () {
                    //    console.log(imagenes[imagen].tempFilePath)
                    //  console.log(data.secure_url)
                    img = data.secure_url;
                    const usuarioImagenGuardar = new UsuarioEimagen_1.default({
                        usuario: ID_user_mongo,
                        img: img
                    });
                    yield usuarioImagenGuardar.save();
                }))
                    .catch((error) => { console.log(error); });
                // console.log(archivo[imagen].tempFilePath)
            }
            //si solamente hay un archuivo
        }
        //SI HAY UN SOLO ARCHIVO EN LA REQ.FILES
        if (Object.keys(req.files).length === 1) {
            const { tempFilePath } = req.files.imagenes;
            const respuesta = yield cloudinary_1.default.v2.uploader.upload(tempFilePath)
                .then((data) => __awaiter(void 0, void 0, void 0, function* () {
                //  console.log(data.secure_url)
                img = data.secure_url;
                const usuarioImagenGuardar = new UsuarioEimagen_1.default({
                    usuario: ID_user_mongo,
                    img: img
                });
                yield usuarioImagenGuardar.save();
            }))
                .catch((error) => { console.log(error); });
        }
        return res.status(200).json({ msg: 'SUCCESS', ID_user_mongo, imagenes });
    }
    catch (error) {
        return res.status(400).json({
            errors: {
                msg: error
            }
        });
    }
});
exports.postUpload = postUpload;
//# sourceMappingURL=upload.js.map