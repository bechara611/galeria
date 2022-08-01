import nodemailer from 'nodemailer'

const EnviarCorreo=()=>{
//Requerimos el paquete


//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
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
    to: correo,
    subject: asunto,
    text: mensaje
  };
}

export default EnviarCorreo;