import { Router } from "express";
import {  Login, Register,gatAllusers } from "../controllear/user.controllear";
import validate from "../middleware/validate";
import { Logintype, Registertype } from "../zode.schema/zod.user";

const router = Router();


router.post("/", validate( Registertype), Register);
router.get("/", gatAllusers);
router.post("/user",validate(Logintype), Login)
export default router;