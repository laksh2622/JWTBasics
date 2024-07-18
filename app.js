import express from "express";
import dbConnect from "./dbConnect.js";
import "dotenv/config";
import 'express-async-errors';
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRouters.js";

const app = express();
const port = process.env.PORT || 5600;
app.use(express.json());
app.use(express.static('./public'));//C-B
app.use("/api/v1/", userRoutes);
app.get("/", (req, res) => {
  res.send("jWT BAsics");
})

app.use(notFound);
app.use(errorHandler);
; (
  async () => {
    await dbConnect(process.env.MONGO_URL);
    app.listen(port, console.log("server started......", port));

  }
)();

//app.use(express.static('./public'));
// static file like css/image /html which dont change with user to user
//It keeps your code cleaner—no need to write custom routes for each file.
//think of it as opening the “public” folder for everyone to access your website’s static files!
//Instead of handling each request for these files in your code (which can be slow and inefficient), we let the web server take care of it directly.