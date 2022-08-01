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
const postUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { archivo } = req.files;
        const token = req.header('x-token');
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                errors: {
                    msg: 'NOT FILE WERE UPLOADED'
                }
            });
        }
        if (!req.files.archivo) {
            return res.status(400).json({
                errors: {
                    msg: 'ARCHIVO NOT FOUND'
                }
            });
        }
        //-----------------------------------------------------------------------------------------
        //IMPORTANT VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
        const Payload = yield (0, JWT_1.verificarYretornarJWT)(token);
        console.log(Payload);
        //-----------------------------------------------------------------------------------------
        // ACA POR CADA IMAGEN QUE SE HAYA CARGADO AL REQ.FILES, se va a ejecutar el codigo de cloudinary
        for (let imagen in archivo) {
            console.log(archivo[imagen].tempFilePath);
        }
        //---------------------------------------------------------------------------------------------
        //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header
        const usuarioImagenGuardar = new UsuarioEimagen_1.default({
            usuario: ID_user_mongo,
            img: 'https://blog.aashish-panthi.com.np/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1656265103791%2FHZfkKUGIv.jpg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75'
        });
        yield usuarioImagenGuardar.save();
        //--------------------------------------------------
        return res.json({ msg: 'IMAGEN PASO LA PRUEBA', ID_user_mongo, archivo });
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