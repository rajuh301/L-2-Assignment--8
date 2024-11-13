"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordRouter = void 0;
const express_1 = __importDefault(require("express"));
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const overdue_controller_1 = require("../Overdue/overdue.controller");
const router = express_1.default.Router();
router.post("/", borrowRecord_controller_1.borrowRecordController.createBorrow);
router.get("/overdue", overdue_controller_1.overdueController.getOverDue);
exports.borrowRecordRouter = router;
