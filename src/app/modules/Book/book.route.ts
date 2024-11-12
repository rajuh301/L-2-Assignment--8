import express from "express"
import { bookController } from "./book.controller";
import validateRequest from "../../middleWares/validateRequest";
import { bookValidationSchema } from "./book.validation";

const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBookId);
router.put("/:bookId", validateRequest(bookValidationSchema.update), bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const bookRouter = router;