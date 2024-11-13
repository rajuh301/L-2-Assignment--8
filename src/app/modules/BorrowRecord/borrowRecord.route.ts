import express from "express"
import { borrowRecordController } from "./borrowRecord.controller";
import { overdueController } from "../Overdue/overdue.controller";

const router = express.Router();

router.post("/", borrowRecordController.createBorrow);
router.get("/overdue", overdueController.getOverDue);



export const borrowRecordRouter = router;