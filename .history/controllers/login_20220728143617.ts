import { Request, Response } from "express";

const getLogin=async(req:Request,res:Response)=>{

    const query=req.query
    res.status(200).json({
        msg:'Success get login',
        query
    })
}

export {getLogin}