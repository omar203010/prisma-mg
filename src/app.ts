import {Request, Response } from "express";
import  { createUser,getAllUsers } from "./controllear/user.controllear";
import userRoutes from "./routes/user.routes";
import blogRouter from "./routes/user.routes"
import express,{Application} from 'express';
// import userroutr from './routes/user.routes'
import { prisma } from "./config/db";
const app:Application = express();
let port:number = 3003;


app.use(express.json());
app.use('/user',userRoutes);
app.use("/blog", blogRouter);

// app.use('/users',getAllUsers);
// // app.post('/api/user/create',createUser);
// app.use('/blog',createUser);

// app.put('/api/user/update/:id',updateUserById);
// app.delete('/api/user/delete/:id',deleteUserById);
// app.listen(3000,()=>console.log('express started!'));





app.listen(port,()=>console.log(`express started on port ${port}`));