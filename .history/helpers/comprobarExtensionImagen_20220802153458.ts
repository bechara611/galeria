const comprobarExtensionImagen1=async(file:any)=>{
    const nombreConExtension=file.split('.')
    const extensionesValida=['jpeg,jpg,png','gif']
    
    const extension=nombreConExtension[nombreConExtension.length-1]
    
    
    console.log(`id:${extension}`)
    //cloudinary.v2.uploader.destroy(id_publico_final)

    if(!extensionesValida.includes(extension)){
        return null
       }
}

export  {comprobarExtensionImagen1}