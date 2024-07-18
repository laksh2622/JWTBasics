import CustomAPIError from "../errors/CustomAPIError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ err: "something went wrong! Try again later" });
}
export default errorHandler;

//const errorHandler = (err, req, res, next) => { ... }:  defines an error handling middleware function called errorHandler.
//takes four parameters: err (the error object), req (the request object), res (the response object), and next (the next middleware function).

//err object is an instance of CustomAPIError, it means we intentionally threw this custom error.