import cloudinary from 'cloudinary';
const borrarImagenCloudinary=async(link:any)=>{
    link='ttps://res.cloudinary.com/dscpbsjbj/image/upload/v1659454090/gmxjuebt0kmpqzvulmuz.png'
    const vectorLink=link.split('.')
    console.log(vectorLink)
    console.log(vectorLink[vectorLink.length-2])
    //cloudinary.v2.uploader.destroy(vectorLink[vectorLink.length-1])
}
borrarImagenCloudinary('')
export default {borrarImagenCloudinary}