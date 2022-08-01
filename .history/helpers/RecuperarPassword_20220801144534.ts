import nodemailer from 'nodemailer'

const EnviarCorreo=async (email=null)=>{
//Requerimos el paquete



  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
        user: "galleryappbechara@hotmail.com",
        pass: "120577Dany"
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