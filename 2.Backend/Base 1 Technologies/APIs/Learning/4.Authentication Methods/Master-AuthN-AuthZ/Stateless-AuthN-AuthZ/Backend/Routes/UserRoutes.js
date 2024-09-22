import express from "express";
import { userLogin, userSignup } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/signup" , userSignup);
router.post("/login" , userLogin);

export default router;