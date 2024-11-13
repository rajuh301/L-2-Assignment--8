"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.overdueController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const overdue_service_1 = require("./overdue.service");
const getOverDue = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield overdue_service_1.OverdueServices.getOverDue();
    if (data.length === 0) {
        res.status(200).json({
            success: true,
            status: 200,
            message: "No overdue books",
            data: []
        });
    }
    res.status(200).json({
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: data
    });
}));
exports.overdueController = {
    getOverDue
};
