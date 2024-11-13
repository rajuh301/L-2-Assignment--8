"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBorrowRouter = void 0;
const express_1 = __importDefault(require("express"));
const returnBorrow_controller_1 = require("./returnBorrow.controller");
const router = express_1.default.Router();
router.post("/", returnBorrow_controller_1.returnBorrowController.returnBook);
exports.returnBorrowRouter = router;
