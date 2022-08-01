import { Schema,model } from "mongoose";

const UsuarioImagenSchema = new Schema({
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    },
    img:{
        type:String,
        required:[true,'IMG is necesary']
    }
})

export default model('UsuarioImagen',UsuarioImagenSchema)