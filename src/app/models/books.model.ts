import { model, Schema } from "mongoose";
import { IBook } from "../../interfaces/books.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty"],
    },
    author: {
      type: String,
      required: [true, "Author cannot be empty"],
    },
    genre: {
      type: String,
      required: true,
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message: "Give a proper genre",
      },
    },
    isbn: {
      type: String,
      unique: [true, "ISBN number must be a unique number"],
      required: [true, "ISBN cannot be empty"],
    },
    description: {
      type: String,
      default: "",
    },
    copies: {
      type: Number,
      min: [0, "Copies must be a positive number"],
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
