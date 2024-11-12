import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client"; 

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500; 
    let message = err.message || "Something went wrong!";

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2001") {
            statusCode = 404;
            message = "The requested record could not be found.";
        } else if (err.code === "P2025") {
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

export default globalErrorHandler;
