import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError, ZodFormattedError } from "zod";

const validate = (schema:AnyZodObject)=>(req:Request,res:Response,next:NextFunction)=>{
    try {
        schema.parse({
            body:req.body,
            params: req.params,
            quere: req.query,
            Headers: req.headers,
        })
        next()
    } catch (error) {
        const zoderror = error as ZodError;
        return res.status(400).json({
            message: zoderror.errors[0].message,
        })
        
    }
};
export default validate;