import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server Error",
  };

  // Handle Invalid Mongoose ID Error(Wrong params id)
  if (err.name === "CastError") {
    const message = `Product not found. Invalid: ${err?.path}`;
    error = new ErrorHandler(message, 404);
  }
  // Handle validation error(forgot to entry name, when create product)
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 404);
  }

  // Handle Mongoose Duplicate Key Error  (When you register same email then you get that error)
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
    error = new ErrorHandler(message, 400);
  }

  // Handle wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid. Try Again!!!`;
    error = new ErrorHandler(message, 400);
  }

  // Handle expired JWT Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired. Try Again!!!`;
    error = new ErrorHandler(message, 400);
  }

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(error.statusCode).json({
      message: error.message,
      error: err,
      stack: err?.stack,
    });
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};
