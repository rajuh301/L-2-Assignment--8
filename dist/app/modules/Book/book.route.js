"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post("/", book_controller_1.bookController.createBook);
router.get("/", book_controller_1.bookController.getAllBooks);
router.get("/:bookId", book_controller_1.bookController.getBookId);
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.bookValidationSchema.update), book_controller_1.bookController.updateBook);
router.delete("/:bookId", book_controller_1.bookController.deleteBook);
exports.bookRouter = router;
