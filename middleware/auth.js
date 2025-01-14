import CustomAPIError from "../errors/CustomAPIError.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import BadRequestError from "../errors/BadRequestError.js";

const auth = (req, res, next) => {

  //console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("bearer "))
    throw new BadRequestError("No token provided", 401);
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };

    next();

  } catch (error) {
    throw new BadRequestError("Not auth  user", 401);
  }

}
export default auth;