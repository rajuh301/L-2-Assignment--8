import express from "express"
import { borrowRecordController } from "./borrowRecord.controller";

const router = express.Router();

router.post("/", borrowRecordController.createBorrow);



export const borrowRecordRouter = router;