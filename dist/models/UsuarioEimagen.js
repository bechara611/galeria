"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioImagenSchema = new mongoose_1.Schema({
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    img: {
        type: String,
        required: [true, 'IMG is necesary']
    }
});
exports.default = (0, mongoose_1.model)('UsuarioImagen', UsuarioImagenSchema);
//# sourceMappingURL=UsuarioEimagen.js.map