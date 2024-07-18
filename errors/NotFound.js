import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";
class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.NOT_FOUND;

  }

}
export default NotFound;