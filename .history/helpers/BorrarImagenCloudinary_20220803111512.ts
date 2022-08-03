import cloudinary from 'cloudinary';

const borrarImagenCloudinary=async(link:any)=>{
    try {
        cloudinary.v2.config(process.env.API_KEY_CLOUDINARY);
        link='https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico'
        const nombreConExtension=link.split('/')
        console.log(nombreConExtension)
        console.log(nombreConExtension[nombreConExtension.length-1])
        const id_publicoYextension=nombreConExtension[nombreConExtension.length-1].split('.');
        
        
        const id_publico_final=id_publicoYextension[id_publicoYextension.length-2]
        
        
        console.log(`id:${id_publico_final}`)
        const borrado = await cloudinary.v2.uploader.destroy(id_publico_final)
                        .then((data)=>{console.log(data)})
                        .catch((error)=>{console.log(error)})
    } catch (error) {
        console.log(error)
    }
   
}
borrarImagenCloudinary('')
export default {borrarImagenCloudinary}