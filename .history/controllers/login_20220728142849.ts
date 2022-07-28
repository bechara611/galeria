import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const {user,password}=req.params
    res.status(200).json({
        msg:'Success get login',
        
    })
}

export {getLogin}