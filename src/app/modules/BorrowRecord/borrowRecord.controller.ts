import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { borrowRecordServices } from "./borrowRecord.service";
import sendResponse from "../../../shared/sendResponse";

const createBorrow = catchAsync(async (req: Request, res: Response) => {
    const { bookId, memberId } = req.body;

    const result = await borrowRecordServices.createBorrow(bookId, memberId);


    res.status(200).json({
        success: true,
        message: "Book borrowed successfully",
        data: {
            borrowId: result.borrowId,
            bookId: result.bookId,
            memberId: result.memberId,
            borrowDate: result.borrowDate
        }
    })

});



export const borrowRecordController = {
    createBorrow
}