import express, { Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/books.model";
export const borrowRoutes = express.Router();

borrowRoutes.post("/", async (req: Request, res: Response) => {
  const borrowData = req.body;
  const book = await Book.findById(borrowData.book);
  const borrowed = await Borrow.create(borrowData);
  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: book,
  });
});

borrowRoutes.get("/", async (req: Request, res: Response) => {
  const borrowsData = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
      },
    },
  ]);

  console.log(borrowsData);

  res.json({
    success: true,
    message: "Borrows retrieved successfully",
    data: borrowsData,
  });
});
