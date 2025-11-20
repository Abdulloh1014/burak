// for USER

import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";


/** Member */
router.post("/member/login", memberController.Login);
router.post("/member/signup", memberController.Signup);
router.get("/member/detail", memberController.verifyAuth);


/** Product */


/** Order */


export default router;