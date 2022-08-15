import nodemailer from 'nodemailer'
import Usuario from '../models/Usuario';

const EnviarCorreo2=async (email=null)=>{
return new Promise(async(resolve,reject)=>{
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
            var asunto='RECOVERY PASSWORD FROM GALLERY APP'
            
            //Creamos las opciones
            var mailOptions = {
                from: 'GALLERY APP',
                to: email,
                subject: asunto,
                text: mensaje,
                html:`
                <div style="background:gray;min-width: 100vw; display:flex;justify-content: center;
                text-align: center;
                ">
                <p style="color:pink; justify-content:center";
                text-align: center;
                ;>RECOVERY PASSWORD</p>
                </div>
                <h1 style=" text-align: center;;>Gallery App</h1>
                <h3 style="color:red">YOUR PASSWORD IS:<p style="color:blue">${usuario.password}</p></h3>
                <p>If you didn't request this code, you can ignore this email. Someone else may have entered your email address by mistake.
                <br>
                <br>
                </p>
                <br>
                <br>
                <br>
                <p>Thank you,
                Dany Bechara</p>
                <div style="background:gray;min-width: 100vw; display:flex; justify-content: center; text-align: center;">
                <p style="color:white; justify-content:center";
                text-align: center;
                font-size:15px;
                >Gallery App</p>
                </div>`
              };
            
              //ejecutamos 
          await   transporter.sendMail(mailOptions, (error, info) => {
                 if (error) {
                    console.log(error)
                        reject(null)
                    
                 } else {
                     console.log(info)
                    //return info
                     resolve(true)
                 }
             });
            
            // return true
            }
            
     catch (error) {
        return null
    }
})
    

}

export default EnviarCorreo2;