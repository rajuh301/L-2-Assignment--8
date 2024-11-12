import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { returnBorrowServices } from "./returnBorrow.service";


const returnBook = catchAsync(async (req: Request, res: Response) => {
    const { borrowId } = req.body;


    await returnBorrowServices.returnBook(borrowId);

    res.status(200).json({
        success: true,
        message: "Book returned successfully",
    })

});


export const returnBorrowController = {
    returnBook
}