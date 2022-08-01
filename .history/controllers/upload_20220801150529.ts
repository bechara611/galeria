import { Request, Response } from "express";
import { verificarYretornarJWT } from "../helpers/JWT";
import UsuarioEimagen from "../models/UsuarioEimagen";

const postUpload=async(req:Request,res:Response)=>{
    try {
        const {archivo} = req.files;
        const token=req.header('x-token')
   
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
        console.log(archivo[imagen].tempFilePath)
    }
//---------------------------------------------------------------------------------------------

    //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header
    const usuarioImagenGuardar= new UsuarioEimagen({
        usuario:ID_user_mongo,
        img:'https://blog.aashish-panthi.com.np/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1656265103791%2FHZfkKUGIv.jpg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75'
    })
    await usuarioImagenGuardar.save();
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