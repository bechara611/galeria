import JWT from 'jsonwebtoken'


const GenerarJWT = (uid: any) => {

    return new Promise((resolve, reject) => {
        const Payload = uid;

        JWT.sign(Payload, process.env.claveJWT, 
            {
            expiresIn:"4h"
        }, (error, token) => {
            if (error) { return reject(error) }
            else {resolve(token) }

        }

        )
    })
}

export { GenerarJWT }