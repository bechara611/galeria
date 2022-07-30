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
exports.postUpload = void 0;
const JWT_1 = require("../helpers/JWT");
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
        // console.log(archivo)
        for (let imagen in archivo) {
            console.log(archivo[imagen].tempFilePath);
        }
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