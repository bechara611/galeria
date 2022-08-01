import nodemailer from 'nodemailer'

const EnviarCorreo2=async (email=null)=>{
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
    from: 'bechara611@gmail.com',
    to: email,
    subject: asunto,
    text: mensaje
  };

  //ejecutamos 
  transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
         console.log(error);
     } else {
         console.log(info)
         return info.response;
     }
 });


}



export default EnviarCorreo2;