import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";
class UnAuthorized extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.UNAUTHORIZED;

  }

}
export default UnAuthorized;