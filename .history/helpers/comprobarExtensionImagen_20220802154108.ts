const comprobarExtensionImagen1=async(file:any)=>{
    const nombreConExtension=file.split('.')
    const extensionesValida=['jpeg','jpg','png','gif','ico']
    
    const extension=nombreConExtension[nombreConExtension.length-1]
    return new Promise((resolve,reject)=>{
        console.log(`id:${extension}`)
        //cloudinary.v2.uploader.destroy(id_publico_final)
    
        if(!extensionesValida.includes(extension)){
            reject('EXTENSION NO VALIDA')
           }else{
            resolve(true);
           }

    }
    
    
}

export  {comprobarExtensionImagen1}