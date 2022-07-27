import { model, Schema } from "mongoose";


const UsuarioSchema = new Schema({
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
})

export default model('Usuario', UsuarioSchema);