"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarioEimagenesPorId = exports.getUsuarioEimagenes = void 0;
const getUsuarioEimagenes = (req, res) => {
    res.json({ msg: 'GET DE TODAS LAS IMAGENES Y USUARIOS' });
};
exports.getUsuarioEimagenes = getUsuarioEimagenes;
const getUsuarioEimagenesPorId = (req, res) => {
    const { idUsuario } = req.params;
    res.json({ msg: 'GET DE TODAS LAS IMAGENES PERO POR UN SOLO USUARIO', idUsuario });
};
exports.getUsuarioEimagenesPorId = getUsuarioEimagenesPorId;
//# sourceMappingURL=usuarioEimagen.js.map