import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const user=req.params.user
    res.status(200).json({
        msg:'Success get login',
        user
    })
}

export {getLogin}