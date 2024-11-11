import express from "express"
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBookId);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const bookRouter = router;