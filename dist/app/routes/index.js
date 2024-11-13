"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/Book/book.route");
const member_route_1 = require("../modules/Member/member.route");
const borrowRecord_route_1 = require("../modules/BorrowRecord/borrowRecord.route");
const returnBorrow_route_1 = require("../modules/ReturnBorrow/returnBorrow.route");
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: "/books",
        route: book_route_1.bookRouter
    },
    {
        path: "/members",
        route: member_route_1.memberRouter
    },
    {
        path: "/borrow",
        route: borrowRecord_route_1.borrowRecordRouter
    },
    {
        path: "/return",
        route: returnBorrow_route_1.returnBorrowRouter
    },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
