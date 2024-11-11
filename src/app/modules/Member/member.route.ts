import express from "express"
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/", memberController.createMebmer);
router.get("/", memberController.getAllMember);
router.get("/:memberId", memberController.getMemberById);
router.put("/:memberId", memberController.updateMamber);
router.delete("/:memberId", memberController.deleteMember);


export const memberRouter = router;