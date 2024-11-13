"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong!";
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2001") {
            statusCode = 404;
            message = "The requested record could not be found.";
        }
        else if (err.code === "P2025") {
            statusCode = 404;
            message = "The record you are trying to update/delete does not exist.";
        }
    }
    if (err.message && err.message.includes("Unknown argument")) {
        const regex = /Unknown argument `(\w+)`. Did you mean `(\w+)`\?/;
        const match = err.message.match(regex);
        if (match) {
            statusCode = 400;
            message = `Invalid field '${match[1]}' provided. Did you mean '${match[2]}'?`;
        }
    }
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
    });
};
exports.default = globalErrorHandler;
