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
exports.getUsuarioEimagenesPorId = exports.getUsuarioEimagenes = void 0;
const UsuarioEimagen_1 = __importDefault(require("../models/UsuarioEimagen"));
const getUsuarioEimagenes = (req, res) => {
    //  console.log(imagenes)
    res.json({ msg: 'GET DE TODAS LAS IMAGENES Y USUARIOS' });
};
exports.getUsuarioEimagenes = getUsuarioEimagenes;
const getUsuarioEimagenesPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUsuario } = req.params;
    const usuarioEimagenes = yield UsuarioEimagen_1.default.find({ usuario: idUsuario }).populate('usuario');
    if (usuarioEimagenes.length === 0) {
        return res.json({ msg: 'NO DATA', usuarioEimagenes });
    }
    res.json({ msg: 'SUCCESS', usuarioEimagenes });
});
exports.getUsuarioEimagenesPorId = getUsuarioEimagenesPorId;
//# sourceMappingURL=usuarioEimagen.js.map