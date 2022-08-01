import nodemailer from 'nodemailer'

const EnviarCorreo=async (email=null)=>{
//Requerimos el paquete



let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com2',
    port: 465,
    secure: true, 
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
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info.response)
        return info.response;
    }
});


}



export default EnviarCorreo;