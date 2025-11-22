// for USER

import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";
import uploader from "./libs/utils/uploader";

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

router.post("/member/update/", 
    memberController.verifyAuth,
    uploader("members").single("memberImage"),
    memberController.updateMember
);



/** Product */


/** Order */


export default router;