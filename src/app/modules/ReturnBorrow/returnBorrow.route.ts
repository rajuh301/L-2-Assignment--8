import express from "express"
import { returnBorrowController } from "./returnBorrow.controller";

const router = express.Router();

router.post("/", returnBorrowController.returnBook);



export const returnBorrowRouter = router;