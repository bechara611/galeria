import express, { Request,Application } from 'express'
import dotenv from 'dotenv'
dotenv.config();


class Server {
    app: Application
    numero: number
    variable: any
    port: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080'

    }

    Puerto() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en ${this.port}`)
        })
    }
}

export default Server;

