import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const {user='usuario',password='password'}=req.params
    res.status(200).json({
        msg:'Success get login',
        user,
        password
    })
}

export {getLogin}