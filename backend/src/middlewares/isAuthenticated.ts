import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "prisma/config";

interface Payload{
    sub: string,

}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    //receber tokenn
    const authToken = req.headers.authorization;

    if(!authToken) return res.status(401).end();

    const [ , token] = authToken.split(" ")

    try{

        //validar toker
        const {sub} = jwt.verify(token, process.env.JWT_SECRET) as Payload;
        //recuperar id do token e colocar dentro de uma variavel user_id dentro do request
        req.user_id = sub;
        return next();
    }catch(err){
        return res.status(401).end();
    }
}