import express from "express";
import { connectDB } from "./config/db";
import userRouter from "./routes/user.routes";
import blogRouter from "./routes/blogrouter"

// import blogRouter from "./routes/blog.router"

const app = express();
app.use(express.json());
connectDB();
app.use("/user", userRouter);
app.use("/blog", blogRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});