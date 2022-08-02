import { Request, Response } from "express";
import { verificarYretornarJWT } from "../helpers/JWT";
import UsuarioEimagen from "../models/UsuarioEimagen";
import cloudinary from 'cloudinary'
import fileUpload from "express-fileupload";
cloudinary.v2.config(process.env.CLOUDINARY_URL);
const postUpload = async (req: Request, res: Response) => {
    try {
       

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                errors: {
                    msg: 'NOT FILE WERE UPLOADED'
                }
            })
        }
        if (!req.files.imagenes) {
            return res.status(400).json({
                errors: {
                    msg: 'IMAGENES NOT FOUND'
                }
            })

        }
        //-----------------------------------------------------------------------------------------
        //IMPORTANT VAMOS A COMPROBAR EL TOKEN QUE VAMOS A RECIBIR DEL HEADER
        const { imagenes} = req.files ;
        const token = req.header('x-token')
        var img: String = '';
        const Payload = await verificarYretornarJWT(token);
        
        let variable=Object.keys(imagenes).length;
        for (let imagen in imagenes) {console.log(imagen)}
        console.log(variable)
        if (Object.keys(imagenes).length === 9) {
            const { tempFilePath } = req.files.imagenes as fileUpload.UploadedFile
            const respuesta = await cloudinary.v2.uploader.upload(tempFilePath)
                .then(async (data) => {
                    //  console.log(data.secure_url)
                    img = data.secure_url;
                    const usuarioImagenGuardar = new UsuarioEimagen({
                        usuario: ID_user_mongo,
                        img: img
                    })
                    await usuarioImagenGuardar.save()
                   
                })
                .catch((error)=>{return console.log(error)});

                return res.status(200).json({ msg: 'SUCCESS', ID_user_mongo, imagenes })
            }
     
        if (Object.keys(imagenes).length=>2 && Object.keys(imagenes).length!=9) {
            for (let imagen in imagenes) {
                console.log(imagenes[imagen].tempFilePath)
                const respuesta = await cloudinary.v2.uploader.upload(imagenes[0].tempFilePath)
                    .then(async (data) => {
                        //    console.log(imagenes[imagen].tempFilePath)
                        //  console.log(data.secure_url)
                        img = data.secure_url;
                        const usuarioImagenGuardar = new UsuarioEimagen({
                            usuario: ID_user_mongo,
                            img: img
                        })
                        await usuarioImagenGuardar.save();
                    })
                    .catch((error) => { console.log(error) })
                // console.log(archivo[imagen].tempFilePath)

            }
            //si solamente hay un archivo......
         
        }

        //---------------------------------------------------------------------------------------------
        //aca guardas la informacion generada de cloudinary y el usuario que hizo login y paso el x-token por el header
        //--------------------------------------------------
        return res.status(200).json({ msg: 'SUCCESS', ID_user_mongo, imagenes })

    } catch (error) {
        return res.status(400).json({
            errors: {
                msg: error
            }
        })
    }

}
export { postUpload }