import prisma from './config/db';
import express,{ Request, Response} from 'express';

export const findAllUsers= async (req:Request,res:Response)=>{
    try{
    let users = await prisma.user.findMany();
    console.log(users);
    res.json(users);
    }catch(e){
        res.json({'masg':e})
    }
};

export const createUser = async (req:Request,res:Response)=>{
    try{
    let users = await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name
        }
    });
    console.log(users);
    res.json(users);
    }catch(e){
        res.json({'masg':e})
    }
};


export const updateUser = async (req:Request,res:Response)=>{
    try{
   let user = await prisma.user.update({
       where:{
           id: parseInt(req.params.id)
       },
       data:{
           email: req.body.email,
           name: req.body.name
       }
   });
   res.json({"msg": "user updated", "user":user});
}catch(e){
   res.json({'masg':e})
}
}; 


export const deleteUser = async (req:Request,res:Response)=>{
    try{
    let user = await prisma.user.delete({
        where:{
            id: parseInt(req.params.id)
        }
    });
    res.json({"msg": "user deleted", "user":user});
    
}catch(e){
    res.json({'masg':e})
}
console.log('deleted user');
}; 