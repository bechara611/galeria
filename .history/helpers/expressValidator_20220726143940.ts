import { Request, Response } from "express"
import { validationResult } from "express-validator"


//este metodo comprueba de forma general los errores de express-validator
const comprobarCampos=(req:Request,res:Response,next)=>{

    const errores= validationResult(req);
    if(!errores.isEmpty){

        res.status(400).json(errores)  ;
    }
    next();
    return;
}

export {comprobarCampos}