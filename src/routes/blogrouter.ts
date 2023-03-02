import { Router } from "express";
import {
  createBlog,
  deletBlog,
  getAllBlog,
  getUserWithBlog,
} from "../controllear/blog.controller";

const router = Router();

router.post("/", createBlog);
router.get("/", getAllBlog);
router.get("/:id", getUserWithBlog);
router.delete("/:id", deletBlog);

export default router;