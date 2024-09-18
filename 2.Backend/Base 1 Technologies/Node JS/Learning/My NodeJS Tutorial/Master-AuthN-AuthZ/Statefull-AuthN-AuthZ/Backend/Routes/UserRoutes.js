import express from "express";
import {userSignup , userLogin} from '../Controllers/UserController.js'

const router = express.Router();

router.post("/signup" , userSignup);
router.post("/login" , userLogin);

export default router;