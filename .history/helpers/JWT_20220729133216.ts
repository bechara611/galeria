import JWT from 'jsonwebtoken'


const GenerarJWT = (uid:any)=>{

    return new Promise((resolve,reject)=>{
        const Payload= uid;

        JWT.sign(Payload,process.env.claveJWT)
    })
}

export {GenerarJWT}