import NotFound from "../errors/NotFound.js";

const notFound = (req, res) => {
  throw new NotFound("Router does't exist ");
}
export default notFound;