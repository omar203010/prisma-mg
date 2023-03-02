import { Request,Response } from "express";
import { prisma } from "../config/db";
export const Register = async (req:Request,res:Response)=>{
    try{
        const user =req.body;
        await prisma.user.create({
            data:user,
        });
        res.json({
            messagew: "user created",
          });
        } catch (error) {
          console.log(error);
        }
      };

export const gatAllusers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

