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

export const Login = async (req: Request, res: Response) => {
  try {
    const { username,  passeord } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        username,
        passeord,
      },
    });

    if (!user) {
      res.json({
        message: "woring username or password",
      });
    }
    res.json({
      message: `weclome back ${username}`,
    });
  } catch (error) {
    console.log(error);
  }
};

