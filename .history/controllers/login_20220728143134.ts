import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const query=req.params
    res.status(200).json({
        msg:'Success get login',
        query
    })
}

export {getLogin}