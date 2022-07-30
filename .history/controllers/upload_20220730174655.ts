import { Request, Response } from "express";
import JWT from 'jsonwebtoken'

const postUpload=(req:Request,res:Response)=>{
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

      //VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
      try {
        //recibe el token del header
 
   if(!Token){
       return res.status(400).json({
           errors:{
               msg:'TOKEN NOT FOUND'
           }
       })
   }else{
       const payload:any =JWT.verify(Token,process.env.claveJWT)
    //   console.log(payload.uid)
    global.ID_user_mongo=payload.uid;
       
   }
   } catch (error) {
       return res.status(400).json({
           errors:{
               msg:'TOKEN NOT VALID'
           }
       })
   }
  //  console.log(imagenes)
res.json({msg:'IMAGEN PASO LA PRUEBA',ID_user_mongo,archivo})
}

export {postUpload}