// for USER

import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";


/** Member */
router.post("/member/login", memberController.Login);
router.post("/member/signup", memberController.Signup);
router.post(
    "/member/logout", 
    memberController.verifyAuth, 
    memberController.logout, 
    
);
router.get("/member/detail", 
    memberController.verifyAuth,
   memberController.getMemberDetail
);


/** Product */


/** Order */


export default router;