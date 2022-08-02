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
exports.comprobarExtensionImagen1 = void 0;
const comprobarExtensionImagen1 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const nombreConExtension = file.split('.');
    const extensionesValida = ['jpeg', 'jpg', 'png', 'gif', 'ico'];
    const extension = nombreConExtension[nombreConExtension.length - 1];
    return new Promise((resolve, reject) => {
        if (!extensionesValida.includes(extension)) {
            reject(null);
        }
        resolve(true);
    });
});
exports.comprobarExtensionImagen1 = comprobarExtensionImagen1;
//# sourceMappingURL=comprobarExtensionImagen.js.map