import express from 'express'
import dotenv from 'dotenv'
dotenv.config();


class Server{
    app:any
    numero:number
    variable:any
    port:string
    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8080'
    }
}

