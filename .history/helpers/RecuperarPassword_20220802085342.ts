import nodemailer from 'nodemailer'

const EnviarCorreo2=async (email=null)=>{
try {
   
        //Requerimos el paquete
        
        
         var transporter = nodemailer.createTransport({
             service: 'Gmail',
             auth: {
                 user: 'bechara611@gmail.com',
                 pass: 'zdchmvaxuwrmvjpa'
             }
         });
        //creamos el mensaje
        var mensaje='Mensaje desde node';
        //creamos el asunto
        var asunto='MENSAJE DESDE NODE'
        
        //Creamos las opciones
        var mailOptions = {
            from: 'GALLERY APP',
            to: email,
            subject: asunto,
            text: mensaje
          };
        
          //ejecutamos 
      await   transporter.sendMail(mailOptions, (error, info) => {
             if (error) {
                return null
                 console.log(error);
             } else {
               //  console.log(info)
                 return true;
             }
         });
        
        return true
        }
        
 catch (error) {
    return null
}

}

export default EnviarCorreo2;