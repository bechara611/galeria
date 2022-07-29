import JWT from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const GenerarJWT = (uid: any) => {

    return new Promise((resolve, reject) => {
        const Payload = uid;

        JWT.sign(Payload,process.env.claveJWT, 
            {
            expiresIn:"4h"
        }, (error,token) => {
            if (error) { return reject(error) }
            else {resolve(token) }

        }

        )
    })
}

export { GenerarJWT }