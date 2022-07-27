"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'Incomplete data: Name']
    },
    correo: {
        type: String,
        required: [true, 'Incomplete data: Email']
    },
    password: {
        type: String,
        required: [true, 'Incomplete data: Password']
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false
    }
});
exports.default = (0, mongoose_1.model)('Usuario', UsuarioSchema);
//# sourceMappingURL=Usuario.js.map