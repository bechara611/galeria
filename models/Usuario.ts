import { model, Schema } from "mongoose";
 

const UsuarioSchema= new Schema({
    nombre:{
        type:String,
        required:[true,'Incomplete data: Name']
    }
})

export default model('Usuario',UsuarioSchema);