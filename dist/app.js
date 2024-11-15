"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandlear_1 = __importDefault(require("./app/middleWares/globalErrorHandlear"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//purser
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        message: "Assignment-8 server is running "
    });
});
app.use("/api/", routes_1.default);
app.use(globalErrorHandlear_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        sussess: false,
        message: "API NOT FOUND!",
        error: {
            patah: req.originalUrl,
            message: "Your requested path is not found!"
        }
    });
});
exports.default = app;
