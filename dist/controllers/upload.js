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
const comprobarExtensionImagen_1 = require("../helpers/comprobarExtensionImagen");
cloudinary_1.default.v2.config(process.env.CLOUDINARY_URL);
const postUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //comprobamos si hay algo cargado en los files, recuerda el middleware de fileupload en tu clase server para que esto valga
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                errors: {
                    msg: 'NOT FILE WERE UPLOADED'
                }
            });
        }
        //ahora comparamos que exista un archivo llamado imagenes que se pasa por la raw-data
        if (!req.files.imagenes) {
            return res.status(400).json({
                errors: {
                    msg: 'IMAGENES NOT FOUND'
                }
            });
        }
        //al haber comprobado que haya datos, los extraemos de manera correcta, 
        const { imagenes } = req.files;
        //extraemos tambien el token que pasaremos por el header
        const token = req.header('x-token');
        var img = '';
        const Payload = yield (0, JWT_1.verificarYretornarJWT)(token);
        //este condicional es muy especial, significa que imagenes si tiene 9 llaves o 9 propiedades,
        //es debido a que es solo un archivo, ya que siempre al subir una sola imagen, se generan nueve 
        //propiedades, entonces es la parte para que se suba 1 sola foto
        if (Object.keys(imagenes).length === 9) {
            // const comprobarExtension= await comprobarExtensionImagen1(imagenes[0].name)
            // console.log(comprobarExtension)
            // if(!comprobarExtension){
            //     return res.status(400).json({
            //         errors: {
            //             msg: 'EXTENSION NO VALIDA'
            //         }
            //     })
            // }
            let promesa = yield (0, comprobarExtensionImagen_1.comprobarExtensionImagen1)(imagenes.name)
                .then((data) => { return data; })
                .catch((error) => { return error; });
            if (!promesa) {
                return res.status(400).json({
                    errors: {
                        msg: 'ext no valida'
                    }
                });
            }
            //esta parte es porque si no se hace asi, typescript no me reconoce el tempFilePath
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
                .catch((error) => { return console.log(error); });
            return res.status(200).json({ msg: 'SUCCESS', ID_user_mongo, imagenes });
        }
        //ahora aca yo coloca si el numero de llaves o propiedades es igual o mayor a dos, ya que
        //cuando se sube mas de 1 archivo, las propiedades se agrupan entonces ya es distinto
        //y coloco tambien que sea diferente a 9 porque yo se que haciendo pruebas, el 9 de 
        //numero de propiedades, es unicamente cuando se sube 1 archivo.
        if (Object.keys(imagenes).length >= 2 && Object.keys(imagenes).length != 9) {
            for (let imagen in imagenes) {
                //  console.log(imagenes[imagen].tempFilePath)
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
            //si solamente hay un archivo......
        }
        //---------------------------------------------------------------------------------------------
        //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header
        //--------------------------------------------------
        return res.status(200).json({ msg: 'SUCCESS', ID_user_mongo });
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