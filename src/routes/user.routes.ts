import { createUser, deleteUser, findAllUsers, updateUser } from '../controllear/user.controllear';
import express from 'express';
let router = express.Router();

//read
router.get('/',findAllUsers);


//create
router.post('/',createUser);

//update
router.put('/:id',updateUser);

//delete
router.delete('/:id',deleteUser);
export default router