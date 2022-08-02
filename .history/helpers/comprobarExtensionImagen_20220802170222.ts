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
    let comprobar=true;
    console.log(file)
    return new Promise((resolve,reject)=>{
        for(let elemento in file){
            console.log(elemento)
            const nombreConExtension=file[elemento].name.split('.')
            const extension=nombreConExtension[nombreConExtension.length-1];
            if(!extensionesValida.includes(extension)){
                reject(null)
                
            }
            
        }
        resolve(true)
        
       
    })
}
    

    
  
 
   




export  {comprobarExtensionImagen1,comprobarExtensionImagen2}