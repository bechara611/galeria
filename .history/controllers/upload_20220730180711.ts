import { Request, Response } from "express";
import { verificarYretornarJWT } from "../helpers/JWT";

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
      if(!Payload){
        return res.status(400).json({
            errors:{
                msg:'TOKEN NOT VALID'
            }
        })
      }
      console.log(Payload)
   //-----------------------------------------------------------------------------------------
  //  console.log(imagenes)
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