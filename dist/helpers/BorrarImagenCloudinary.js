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
const cloudinary_1 = __importDefault(require("cloudinary"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY,
    secure: true
});
const borrarImagenCloudinary = (link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        link = 'https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico';
        const nombreConExtension = link.split('/');
        const id_publicoYextension = nombreConExtension[nombreConExtension.length - 1].split('.');
        const id_publico_final = id_publicoYextension[id_publicoYextension.length - 2];
        const resultado = yield cloudinary_1.default.v2.uploader.destroy(id_publico_final)
            .then((data) => { return true; })
            .catch((error) => { return null; });
        console.log(resultado);
        return resultado;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
const borrarVariasImagenCloudinaryPromesa = (link) => __awaiter(void 0, void 0, void 0, function* () {
    let resultado;
    const promesa = new Promise((resolve, reject) => {
        link.forEach((element, index) => __awaiter(void 0, void 0, void 0, function* () {
            const nombreConExtension = link[index].split('/');
            const id_publicoYextension = nombreConExtension[nombreConExtension.length - 1].split('.');
            const id_publico_final = id_publicoYextension[id_publicoYextension.length - 2];
            //   console.log(`id del index numero ${index} :${id_publico_final}`)
            resultado = yield cloudinary_1.default.v2.uploader.destroy(id_publico_final)
                .then((data) => {
                resolve(true);
            })
                .catch((error) => {
                reject(null);
            });
        }));
        return resultado;
        //  link='https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico'
    });
    return promesa;
});
//const vector = ['https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc123.ico','https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc456.ico']
//metodo(vector)
//borrarImagenCloudinary('')
exports.default = { borrarImagenCloudinary, borrarVariasImagenCloudinaryPromesa };
//# sourceMappingURL=BorrarImagenCloudinary.js.map