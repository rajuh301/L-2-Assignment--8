import { NextFunction, Request, Response } from "express";

const globalErrorHandlear = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: err.message || "Something went wrong!"
    })
};

export default globalErrorHandlear;