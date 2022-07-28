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
exports.UsuariosGet = exports.UsuarioPut = exports.UsuarioDelete = exports.UsuarioPost = exports.UsuarioGet = void 0;
const expressValidator_1 = require("../helpers/expressValidator");
const Usuario_1 = __importDefault(require("../models/Usuario"));
//CONTROLADOR PARA TODOS LOS USUARIOS
const UsuariosGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let correos: Array<string> = [];
        let correos = [];
        const Usuarios = yield Usuario_1.default.find();
        const Total = yield Usuario_1.default.countDocuments();
        if (Usuarios) {
            //hiciste esto para recorrer la respuesta y guardar solo el correo en un vector que declaraste aparte   
            for (let prop in Usuarios) {
                correos.push(Usuarios[prop].correo);
            }
            res.status(200).json({
                Total,
                correos,
                Usuarios
            });
        }
    }
    catch (error) {
        res.status(400).json({
            errors: {
                msg: error
            }
        });
    }
});
exports.UsuariosGet = UsuariosGet;
//CONTROLADOR PARA UN USUARIO EN ESPECIFICO RECIBIENDO EL ID DEL USUARIO
const UsuarioGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield Usuario_1.default.findById(id);
    if (usuario) {
        res.status(200).json({
            msg: 'Success',
            usuario
        });
    }
    else {
        return res.status(400).json({ error: { msg: 'User not found' } });
    }
});
exports.UsuarioGet = UsuarioGet;
//CONTROLADOR PARA REGISTRAR A UN USUARIO 
const UsuarioPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO recuerda que debes colocar la propiedad de estado y google
    const { nombre, correo, password } = req.body;
    const existe = yield (0, expressValidator_1.comprobarUsuarioCorreo)(correo);
    if (existe) {
        return res.status(400).json({ error: { msg: 'Email already exists' } });
    }
    try {
        const usuario = new Usuario_1.default({
            nombre: nombre.toUpperCase(),
            correo: correo.toLowerCase(),
            password
        });
        yield usuario.save();
        res.status(200).json({
            msg: 'Success',
            usuario
        });
    }
    catch (error) {
        res.status(200).json({
            errors: {
                msg: error
            }
        });
    }
});
exports.UsuarioPost = UsuarioPost;
//CONTROLADOR PARA COLOCAR INACTIVO A UN USUARIO
const UsuarioDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // const usuario = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true})
    const usuario = yield Usuario_1.default.findOneAndUpdate({ _id: id }, { estado: false }, { new: true });
    if (usuario) {
        res.status(200).json({
            msg: 'Success-User Deleted',
            usuario
        });
    }
    else {
        return res.status(400).json({ errors: { msg: 'User not found' } });
    }
});
exports.UsuarioDelete = UsuarioDelete;
//CONTROLADOR PARA ACTUALIZAR UN USUARIO
const UsuarioPut = (req, res) => {
    const { nombre, correo, password } = req.body;
    const { id } = req.params;
    res.json({
        msg: 'PUT DE USUARIOS',
        nombre: nombre.toUpperCase(),
        correo: correo.toLowerCase(),
        password,
        id
    });
};
exports.UsuarioPut = UsuarioPut;
//# sourceMappingURL=usuario.js.map