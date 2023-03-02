import { Router } from "express";
import express,{request,response,application} from 'express';
import { createUser,getAllUsers} from '../controllear/user.controllear';
const router = express.Router();

//read 

router.get('/',getAllUsers);


// //create
router.post('/',createUser);
// router.put('/:id',updateUser);

// //update

// //delete
// router.delete('/:id',deleteUser);
export default router;