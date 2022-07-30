import { Request, Response } from "express";

const postUpload=(req:Request,res:Response)=>{
    const {archivo} = req.files;

   
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({msg:'No files were uploaded.'});
        return;
      }
      if (!req.files.archivo) {
        res.status(400).json({msg:'Falta archivo'});
        return;
      }
  //  console.log(imagenes)
res.json({msg:'IMAGEN PASO LA PRUEBA',archivo})
}

export {postUpload}