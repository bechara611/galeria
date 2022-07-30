import { Request, Response } from "express";
import JWT from 'jsonwebtoken'
import { verificarYretornarJWT } from "../helpers/JWT";

const postUpload=async(req:Request,res:Response)=>{
    const {archivo} = req.files;
    const Token= req.header('x-token');
   
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
        return;
      }
      //-----------------------------------------------------------------------------------------
      //IMPORTANT VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
      const Payload= await verificarYretornarJWT();
      console.log(Payload)
   //-----------------------------------------------------------------------------------------
  //  console.log(imagenes)
res.json({msg:'IMAGEN PASO LA PRUEBA',ID_user_mongo,archivo})
}

export {postUpload}