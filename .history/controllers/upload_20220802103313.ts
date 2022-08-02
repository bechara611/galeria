import { Request, Response } from "express";
import { verificarYretornarJWT } from "../helpers/JWT";
import UsuarioEimagen from "../models/UsuarioEimagen";
import cloudinary from 'cloudinary'
cloudinary.v2.config(process.env.CLOUDINARY_URL);
const postUpload=async(req:Request,res:Response)=>{
    try {

        const {archivo} = req.files;
        const token=req.header('x-token')
        var img:String='';
   
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            errors:{
                msg:'NOT FILE WERE UPLOADED'
            }
        })
      }
      if (!req.files.archivo) {
        return res.status(400).json({
            errors:{
                msg:'ARCHIVO NOT FOUND'
            }
        })
  
      }
      //-----------------------------------------------------------------------------------------
      //IMPORTANT VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
      
      const Payload= await verificarYretornarJWT(token);
      
      console.log(Payload)
   //-----------------------------------------------------------------------------------------

   // ACA POR CADA IMAGEN QUE SE HAYA CARGADO AL REQ.FILES, se va a ejecutar el codigo de cloudinary
    for(let imagen in archivo ){
        const respuesta= await cloudinary.v2.uploader.upload()
        .then(async(data)=>{
            console.log(archivo[imagen].tempFilePath)
          //  console.log(data.secure_url)
            img= data.secure_url;
            const usuarioImagenGuardar= new UsuarioEimagen({
                usuario:ID_user_mongo,
                img:img
            })
            await usuarioImagenGuardar.save();
        })
        .catch((error)=>{console.log(error)})
       // console.log(archivo[imagen].tempFilePath)
       
    }
//---------------------------------------------------------------------------------------------

    //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header

//--------------------------------------------------

return res.json({msg:'IMAGEN PASO LA PRUEBA',ID_user_mongo,archivo})
   
} catch (error) {
        return res.status(400).json({
            errors:{
                msg:error
            }
        })
    }
    
}

export {postUpload}