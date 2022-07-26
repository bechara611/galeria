"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'Incomplete data: Name']
    }
});
exports.default = (0, mongoose_1.model)('Usuario', UsuarioSchema);
//# sourceMappingURL=Usuario.js.map