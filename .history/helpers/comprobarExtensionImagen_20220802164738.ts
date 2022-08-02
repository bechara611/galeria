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

const comprobarExtensionImagen2=async(file:[any])=>{
    const extensionesValida=['jpeg','jpg','png','gif','ico']
    let comprobar=1;
    return new Promise((resolve,reject)=>{
        for(let elemento in file){
            const nombreConExtension=file[elemento].name.split('.')
            const extension=nombreConExtension[nombreConExtension.length-1];
            if(!extensionesValida.includes(extension)){
                comprobar=null
                return
            }
            
        }
        if(comprobar===null){
            reject(null)
        }
        if(comprobar===null){
            resolve(true)
        }
       
    })
}
    

    
  
    return new Promise((resolve,reject)=>{
       
    })

   

}


export  {comprobarExtensionImagen1,comprobarExtensionImagen2}