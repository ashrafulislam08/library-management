import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const booksRoutes = express.Router();

booksRoutes.post("/", async (req: Request, res: Response) => {
  const bookBody = req.body;
  const createdBook = await Book.create(bookBody);
  res.status(201).json({
    success: true,
    message: "Book created Successfully",
    data: createdBook,
  });
});

booksRoutes.get("/", async (req: Request, res: Response) => {
  const {
    filter,
    sortBy = "createdAt",
    sort = "asc",
    limit = "10",
  } = req.query;
  const query: any = {};
  if (filter) query.genre = filter;

  const books = await Book.find(query)
    .sort({
      [sortBy as string]: sort === "desc" ? -1 : 1,
    })
    .limit(Number(limit));
  res.json({
    success: true,
    message: "Books retrieved successfully",
    data: books,
  });
});

booksRoutes.get("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);
  res.json({
    success: true,
    message: "Book retrieved successfully",
    data: book,
  });
});

booksRoutes.put("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const bookBody = req.body;
  const updatedBook = await Book.findByIdAndUpdate(bookId, bookBody, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook,
  });
});

booksRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const deletedBook = await Book.findByIdAndDelete(bookId);
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
});
