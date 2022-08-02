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
const comprobarExtensionImagen1 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    file = 'jeje.com';
    const nombreConExtension = file.split('.');
    const extension = nombreConExtension[nombreConExtension.length - 1];
    console.log(`id:${extension}`);
    //cloudinary.v2.uploader.destroy(id_publico_final)
});
comprobarExtensionImagen1('');
exports.default = { comprobarExtensionImagen1 };
//# sourceMappingURL=comprobarExtensionImagen.js.map