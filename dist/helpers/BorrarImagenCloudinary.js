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
const borrarImagenCloudinary = (link) => __awaiter(void 0, void 0, void 0, function* () {
    link = 'ttps://res.cloudinary.com/dscpbsjbj/image/upload/v1659454090/gmxjuebt0kmpqzvulmuz.png';
    const nombreConExtension = link.split('/');
    console.log(nombreConExtension);
    console.log(nombreConExtension[nombreConExtension.length - 1]);
    const id_publicoYextension = nombreConExtension[nombreConExtension.length - 1].split('.');
    const id_publico_final = id_publicoYextension[id_publicoYextension.length - 2];
    console.log(`id:${id_publico_final}`);
    //cloudinary.v2.uploader.destroy(id_publico_final)
});
borrarImagenCloudinary('');
exports.default = { borrarImagenCloudinary };
//# sourceMappingURL=BorrarImagenCloudinary.js.map