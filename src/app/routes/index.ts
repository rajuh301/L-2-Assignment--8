import express from "express"
import { bookRouter } from "../modules/Book/book.route";
import { memberRouter } from "../modules/Member/member.route";



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
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;