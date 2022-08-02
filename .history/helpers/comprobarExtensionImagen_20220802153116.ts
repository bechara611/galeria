const comprobarExtensionImagen1=async(file:any)=>{
    file='jeje.com'
    const nombreConExtension=file.split('.')
    
    
    const extension=nombreConExtension[nombreConExtension.length-1]
    
    
    console.log(`id:${extension}`)
    //cloudinary.v2.uploader.destroy(id_publico_final)
}
comprobarExtensionImagen1('')
export default {comprobarExtensionImagen1}