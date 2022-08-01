import nodemailer from 'nodemailer'

const EnviarCorreo=async (email=null)=>{
//Requerimos el paquete


//Creamos el objeto de transporte
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'galleryappbechara@gmail.com',
//     pass: '120577Dany'
//   }
// });
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com ',
    port: 465,
    auth: {
        user: 'galleryappbechara@gmail.com',
        pass: '120577Dany'
    }
  });
//creamos el mensaje
var mensaje='';
//creamos el asunto
var asunto=''

//Creamos las opciones
var mailOptions = {
    from: 'galleryappbechara@gmail.com',
    to: email,
    subject: asunto,
    text: mensaje
  };

  //ejecutamos 
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info.response)
        return info.response;
    }
});


}



export default EnviarCorreo;