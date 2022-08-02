import cloudinary from 'cloudinary';
const borrarImagenCloudinary=async(link:any)=>{
    link='www.google.com'
    const vectorLink=link.split('.')
    console.log(vectorLink[vectorLink.length-2])
    //cloudinary.v2.uploader.destroy(vectorLink[vectorLink.length-1])
}
borrarImagenCloudinary('')
export default {borrarImagenCloudinary}