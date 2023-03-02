import express, { Request,Response,Application } from "express";
import { prisma } from "../config/db";
import { userInfo } from "os";

export const getAllUsers = async (req:Request,res:Response)=>{
    let users = await prisma.user.findMany();
    console.log(users);
    res.send(users);
    }
    
export const createUser = async (req:Request,res:Response)=>{
   
   let userinfo=req.body
    try{ 
    let user = await prisma.user.create({
        
   
  data:userinfo,
   
});

console.log("creted user");
res.json("creteduser");
}catch(e){
    res.json({'masg':e})
}
}

// export const updateUserById = async (req:Request,res:Response)=>{
// let user = await prisma.user.update({
// where:{
//     id: parseInt(req.params.id)
// },
// data:{
//     username:req.body.username,
//     email:req.body.email,
//     passeord:req.body.passeord
// }
// });
// if(user){
// res.status(200).json({message:"user updated"});
// }else{
// res.status(400).json({message:"error!"});
// }
// }





    
