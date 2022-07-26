"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosGet = exports.UsuarioPut = exports.UsuarioDelete = exports.UsuarioPost = exports.UsuarioGet = void 0;
//CONTROLADOR PARA TODOS LOS USUARIOS
const UsuariosGet = (req, res) => {
    res.json({ msg: 'GET DE USUARIOS' });
};
exports.UsuariosGet = UsuariosGet;
//CONTROLADOR PARA UN USUARIO EN ESPECIFICO RECIBIENDO EL ID DEL USUARIO
const UsuarioGet = (req, res) => {
    const { id } = req.params;
    res.json({ msg: 'GET DE USUARIO EN ESPECIFICO', id });
};
exports.UsuarioGet = UsuarioGet;
//CONTROLADOR PARA REGISTRAR A UN USUARIO 
const UsuarioPost = (req, res) => {
    //TODO recuerda que debes colocar la propiedad de estado y google
    const { nombre, correo, password } = req.body;
    res.json({
        msg: 'POST DE USUARIOS',
        nombre: nombre.toUpperCase(),
        correo: correo.toLowerCase(),
        password
    });
};
exports.UsuarioPost = UsuarioPost;
//CONTROLADOR PARA COLOCAR INACTIVO A UN USUARIO
const UsuarioDelete = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'DELETE DE USUARIOS',
        id
    });
};
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