import { Request, Response } from "express";
import { verificarYretornarJWT } from "../helpers/JWT";
import UsuarioEimagen from "../models/UsuarioEimagen";
import cloudinary from 'cloudinary'
import fileUpload from "express-fileupload";
cloudinary.v2.config(process.env.CLOUDINARY_URL);
const postUpload=async(req:Request,res:Response)=>{
    try {

        const {imagenes} = req.files;
        const token=req.header('x-token')
        var img:String='';
   
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            errors:{
                msg:'NOT FILE WERE UPLOADED'
            }
        })
      }
      if (!req.files.imagenes) {
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
    
   if(Object.keys(req.files).length > 1){
   for(let imagen in imagenes ){
      
        const respuesta= await cloudinary.v2.uploader.upload(imagenes[imagen].tempFilePath)
        .then(async(data)=>{
            console.log(imagenes[imagen].tempFilePath)
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
} if(Object.keys(req.files).length===1){
    const {tempFilePath} = req.files.imagenes as fileUpload.UploadedFile
    const respuesta= await cloudinary.v2.uploader.upload(tempFilePath)
        .then(async(data)=>{
          //  console.log(data.secure_url)
            img= data.secure_url;
            const usuarioImagenGuardar= new UsuarioEimagen({
                usuario:ID_user_mongo,
                img:img
            })
            await usuarioImagenGuardar.save();
}}

//---------------------------------------------------------------------------------------------

    //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header

//--------------------------------------------------

return res.status(200).json({msg:'SUCCESS',ID_user_mongo,imagenes})
   
} catch (error) {
        return res.status(400).json({
            errors:{
                msg:error
            }
        })
    }
    
}

export {postUpload}