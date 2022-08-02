import cloudinary from 'cloudinary';
const borrarImagenCloudinary=async(link:any)=>{
    link='ttps://res.cloudinary.com/dscpbsjbj/image/upload/v1659454090/gmxjuebt0kmpqzvulmuz.png'
    const nombreConExtension=link.split('/')
    console.log(nombreConExtension)
    console.log(nombreConExtension[nombreConExtension.length-1])
    const id_publicoYextension=nombreConExtension[nombreConExtension.length-1].split('.');
    const id_publico_final=id_publicoYextension[id_publicoYextension.length-1]
    console.log(`id:${id_publico_final}`)
    //cloudinary.v2.uploader.destroy(vectorLink[vectorLink.length-1])
}
borrarImagenCloudinary('')
export default {borrarImagenCloudinary}