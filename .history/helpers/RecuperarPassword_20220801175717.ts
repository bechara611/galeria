import nodemailer from 'nodemailer'

const EnviarCorreo=async (email=null)=>{
//Requerimos el paquete

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'galleryappbechara@gmail.com',
      pass: 'cocvkjtxeygezkwt'
    }
  });
//creamos el mensaje
var mensaje='Mensaje desde node';
//creamos el asunto
var asunto='MENSAJE DESDE NODE'

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