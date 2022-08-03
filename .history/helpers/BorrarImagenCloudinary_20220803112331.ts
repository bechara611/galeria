import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config()

const borrarImagenCloudinary=async(link:any)=>{
    try {
        cloudinary.v2.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY_CLOUDINARY, 
            api_secret: process.env.API_SECRET_CLOUDINARY,
            secure: true
         });
        link='https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico'
        const nombreConExtension=link.split('/')
        console.log(nombreConExtension)
        console.log(nombreConExtension[nombreConExtension.length-1])
        const id_publicoYextension=nombreConExtension[nombreConExtension.length-1].split('.');
        
        
        const id_publico_final=id_publicoYextension[id_publicoYextension.length-2]
        
        
        console.log(`id:${id_publico_final}`)
        const resultado = await cloudinary.v2.uploader.destroy(id_publico_final)
                        .then((data)=>{return true})
                        .catch((error)=>{return null})

            return resultado;
    } catch (error) {
        console.log(error)
        return null
    }
   
}
borrarImagenCloudinary('')
export default {borrarImagenCloudinary}