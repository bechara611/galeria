import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const {email,password}=req.query

    res.status(200).json({
        msg:'Success get login',
        email,
        password
    })
}

export {getLogin}