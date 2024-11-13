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
exports.returnBorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof borrowId !== 'string') {
        throw new Error("Invalid borrowId: Expected a string.");
    }
    // Find the borrow record
    yield prisma_1.default.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: borrowId
        }
    });
    const currentDate = new Date();
    // Update the borrow record
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId: borrowId
        },
        data: {
            returnDate: currentDate
        }
    });
    return result;
});
exports.returnBorrowServices = {
    returnBook
};
