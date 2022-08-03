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
exports.deleteUsuarioImagen = exports.getUsuarioEimagenesPorId = exports.getUsuarioEimagenes = void 0;
const BorrarImagenCloudinary_1 = require("../helpers/BorrarImagenCloudinary");
const UsuarioEimagen_1 = __importDefault(require("../models/UsuarioEimagen"));
const expressValidator_1 = require("../helpers/expressValidator");
const getUsuarioEimagenes = (req, res) => {
    //  console.log(imagenes)
    res.json({ msg: 'GET DE TODAS LAS IMAGENES Y USUARIOS' });
};
exports.getUsuarioEimagenes = getUsuarioEimagenes;
const getUsuarioEimagenesPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUsuario } = req.body;
    //const {id_imagenes}=req.body;
    const usuarioEimagenes = yield UsuarioEimagen_1.default.find({ usuario: idUsuario }).populate('usuario');
    if (usuarioEimagenes.length === 0) {
        return res.status(400).json({
            errors: {
                msg: 'DATA NOT FOUND',
            },
            usuarioEimagenes
        });
    }
    res.status(200).json({ msg: 'SUCCESS', usuarioEimagenes });
});
exports.getUsuarioEimagenesPorId = getUsuarioEimagenesPorId;
const deleteUsuarioImagen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_imagenes } = req.body;
    const existe = yield (0, expressValidator_1.comprobarImagenExiste)(id_imagenes)
        .then((data) => {
        return data;
    })
        .catch((error) => {
        return error;
    });
    if (!existe) {
        return res.status(400).json({
            errors: {
                msg: 'ERROR-DELETE IMG2',
            }
        });
    }
    const resultado = yield (0, BorrarImagenCloudinary_1.borrarVariasImagenCloudinaryPromesa)(id_imagenes)
        .then((data) => { return data; })
        .catch((error) => { return error; });
    if (!resultado) {
        return res.status(400).json({
            errors: {
                msg: 'ERROR-DELETE IMG',
            }
        });
    }
    id_imagenes.forEach((element, index) => __awaiter(void 0, void 0, void 0, function* () {
        const BorrarDelModelo = yield UsuarioEimagen_1.default.findOneAndDelete({ img: element });
    }));
    res.status(200).json({ msg: 'IMG DELETED', resultado });
});
exports.deleteUsuarioImagen = deleteUsuarioImagen;
//# sourceMappingURL=usuarioEimagen.js.map