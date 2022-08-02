const comprobarExtensionImagen1=async(file:any)=>{
    
    const nombreConExtension=file.split('.')
    const extensionesValida=['jpeg','jpg','png','gif','ico']
    
    const extension=nombreConExtension[nombreConExtension.length-1]
    return new Promise((resolve,reject)=>{
        if(!extensionesValida.includes(extension)){
            reject(null)
           }
           resolve(true)
    })

   

}

export  {comprobarExtensionImagen1}