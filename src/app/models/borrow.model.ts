import { model, Schema } from "mongoose";
import { IBorrow } from "../../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Book must be a given."],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity must be given"],
    },
    dueDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export const Borrow = model("Borrow", borrowSchema);
