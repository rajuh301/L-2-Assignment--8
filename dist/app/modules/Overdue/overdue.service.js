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
exports.OverdueServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const date_fns_1 = require("date-fns");
const getOverDue = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueDate = (0, date_fns_1.subDays)(new Date(), 14);
    const overdueRecords = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lte: overdueDate,
            },
            returnDate: null,
        },
        include: {
            book: true,
            member: true,
        },
    });
    const overdueList = overdueRecords.map(record => {
        const overdueDays = Math.floor((new Date().getTime() - new Date(record.borrowDate).getTime()) / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays: overdueDays,
        };
    });
    return {
        data: overdueList,
    };
});
exports.OverdueServices = {
    getOverDue,
};
