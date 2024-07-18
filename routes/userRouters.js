import express from "express";
import { dashboard, login } from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";

const userRoutes = express.Router();
userRoutes.route("/login").post(login);
//userRoutes.get("/dashboard").get(auth,dashboard);
userRoutes.get("/dashboard", auth, dashboard);
// both are different way but mean same
export default userRoutes;