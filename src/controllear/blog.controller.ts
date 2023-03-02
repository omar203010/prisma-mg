import { Request, Response } from "express";
import { prisma } from "../config/db";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;
    await prisma.blog.create({
      data: blog,
    });

    res.json({
      message: "Blog created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllBlog = async (req: Request, res: Response) => {
  try {
    const blogs = await prisma.blog.findMany({});
    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};


export const getUserWithBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = await prisma.blog.findMany({
      where: {
        userId:id,
      },
      select: {
        title: true,
        creatdata: true,
        id: true,
        user: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });
    res.json(userId);
  } catch (error) {
    console.log(error);
  }
};

export const deletBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.blog.deleteMany({
      where: {
        userId: id,
      },
    });
    res.json({
      message: " blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};