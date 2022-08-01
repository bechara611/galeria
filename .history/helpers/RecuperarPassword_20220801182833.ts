import nodemailer from 'nodemailer'

const EnviarCorreo=async (email=null)=>{
//Requerimos el paquete


  let transporter = nodemailer.createTransport({
    host: "Gmail",
    port: 587,
    secure: true, // true for 465, false for other ports
    auth: {
        user:"bechara611@hotmail.com",
        pass:"yvbk sxdt xzps jlud"
    },
  })
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