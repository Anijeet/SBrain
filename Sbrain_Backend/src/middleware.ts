import jwt, { decode } from 'jsonwebtoken'

import { JWT_PASSWORD } from './config'
import { Request,Response,NextFunction } from 'express'

export const UserMiddleware=(req: Request,res: Response,next:NextFunction)=>{
    const header=req.headers["authorization"];
    const decoded =jwt.verify(header as string,JWT_PASSWORD);

    try {
        if(decoded){
            //@ts-ignore
            req.userId=decoded.id
            next()
        }else{
            res.status(403).json({message:"You are not logged in"})
        }
        
    } catch (error) {
        res.json({message:"Middlware problem"})
        
    }
 
} 