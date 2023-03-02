import { Router } from "express";
import {  Register,gatAllusers } from "../controllear/user.controllear";

const router = Router();
router.post("/",  Register);
router.get("/", gatAllusers);
export default router;