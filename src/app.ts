import express, { Request, Response } from "express";
import { booksRoutes } from "./app/controllers/books.controller";

const app = express();
app.use(express.json());

app.use("/api/books", booksRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is working");
});
export default app;
