import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config()
cloudinary.v2.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_CLOUDINARY, 
    api_secret: process.env.API_SECRET_CLOUDINARY,
    secure: true
 });

const borrarImagenCloudinary=async(link:any)=>{
    try {
        
        link='https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico'
        const nombreConExtension=link.split('/')
        console.log(nombreConExtension)
        console.log(nombreConExtension[nombreConExtension.length-1])
        const id_publicoYextension=nombreConExtension[nombreConExtension.length-1].split('.');
        
        
        const id_publico_final=id_publicoYextension[id_publicoYextension.length-2]
        
        
       
        const resultado = await cloudinary.v2.uploader.destroy(id_publico_final)
                        .then((data)=>{return true})
                        .catch((error)=>{return null})
         console.log(resultado)
            return resultado;
    } catch (error) {
        console.log(error)
        return null
    }
   
}


const borrarVariasImagenCloudinary=async(link:any)=>{
    try {

        link.forEach((element,index:any) => {
            
           
            const nombreConExtension=link[index].split('/')
            
            const id_publicoYextension=nombreConExtension[nombreConExtension.length-1].split('.');
            
            
            const id_publico_final=id_publicoYextension[id_publicoYextension.length-2]
            
            
             console.log(`id del index numero ${index} :${id_publico_final}`)
             const resultado = cloudinary.v2.uploader.destroy(id_publico_final)
             .then((data)=>{
              //  console.log(data)
                return true})
            .catch((error)=>{
                //console.log(error)
                return null})

                return resultado;
        });
        
      //  link='https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc0jxrafmu2xw77mdku.ico'
       
       
    } catch (error) {
        console.log(error)
        return null
    }
   
}
const vector = ['https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc123.ico','https://res.cloudinary.com/dscpbsjbj/image/upload/v1659539139/snc456.ico']
const resultado = borrarVariasImagenCloudinary(vector)
console.log(resultado)
export default {borrarImagenCloudinary}