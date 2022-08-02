import nodemailer from 'nodemailer'
import Usuario from '../models/Usuario';

const EnviarCorreo2=async (email=null)=>{
try {
    const usuario = await Usuario.findOne({correo:email});
        //Requerimos el paquete
        
        
         var transporter = nodemailer.createTransport({
             service: 'Hotmail',
             auth: {
                 user: 'galleryappbechara@hotmail.com',
                 pass: 'nicwkzqysyegrlzp'
             }
         });
        //creamos el mensaje
        var mensaje=`
        ******************YOUR PASSWORD FOR GALLERY APP********************
                ${usuario.password}
        *******************************************************************      

        Ing. Dany Bechara.
        `;
        //creamos el asunto
        var asunto='MENSAJE DESDE NODE'
        
        //Creamos las opciones
        var mailOptions = {
            from: 'GALLERY APP',
            to: email,
            subject: asunto,
            text: mensaje,
            html:`
            <div style="background:black;min-width: 100vw; display:flex;justify-content: center;
            text-align: center;
            ">
            <p style="color:pink; justify-content:center";
            text-align: center;
            ;>RECOVERY PASSWORD</p>
            </div>
            <h1>Gallery App</h1>
            <h3 style="color:red">Dany Bechara</h3>
            <div style="background:black;min-width: 100vw; display:flex; justify-content: center;">
            <p style="color:white; justify-content:center";
            text-align: center;
            justify-content:center;
            >DANY BECHARA</p>
            </div>`
          };
        
          //ejecutamos 
      await   transporter.sendMail(mailOptions, (error, info) => {
             if (error) {
                return null
                 console.log(error);
             } else {
                 console.log(info)
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