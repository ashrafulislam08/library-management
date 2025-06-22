import express, { Request, Response } from "express";
import { booksRoutes } from "./app/controllers/books.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is working");
});

app.use("/api/books", booksRoutes);
app.use("/api/borrow", borrowRoutes);

export default app;
