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

UsuarioSchema.methods.toJSON = function(){
    const {__v,password, _id,...usuarioSinClave} = this.toObject();
    usuarioSinClave.uid=_id;
    return usuarioSinClave;
}

export default model('Usuario', UsuarioSchema);