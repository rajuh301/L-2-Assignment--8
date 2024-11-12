import express from "express"
import { bookRouter } from "../modules/Book/book.route";
import { memberRouter } from "../modules/Member/member.route";
import { borrowRecordRouter } from "../modules/BorrowRecord/borrowRecord.route";
import { returnBorrowRouter } from "../modules/ReturnBorrow/returnBorrow.route";



const router = express.Router();

const modulesRoutes = [
    {
        path: "/books",
        route: bookRouter
    },
    {
        path: "/members",
        route: memberRouter
    },
    {
        path: "/borrow",
        route: borrowRecordRouter
    },

    {
        path: "/return",
        route: returnBorrowRouter
    }
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;