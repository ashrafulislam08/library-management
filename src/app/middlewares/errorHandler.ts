import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      success: false,
      error: err,
    });
  }
  return res.status(500).json({
    message: "Internal server error",
    success: false,
    error: {
      name: err.name,
      message: err.message,
    },
  });
};

export default errorHandler;
