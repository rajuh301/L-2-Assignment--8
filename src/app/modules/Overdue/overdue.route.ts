import express from "express"
import { overdueController } from "./overdue.controller";

const router = express.Router();

router.get("/", overdueController.getOverDue);


export const overdueRouter = router;