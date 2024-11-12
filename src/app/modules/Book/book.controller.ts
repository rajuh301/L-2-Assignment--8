import { Request, Response } from "express";
import { bookServices } from "./book.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";


const createBook = async (req: Request, res: Response) => {
    try {
        const result = await bookServices.createBook(req.body)
        res.status(200).json({
            success: true,
            message: "Book Create successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err?.name || "Something went wrong",
            error: err
        })
    }
};


const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const result = await bookServices.getAllBooks()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Books retrieved successfully",
        data: result
    });
});

const getBookId = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const result = await bookServices.getBookId(bookId)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Books retrieved successfully",
        data: result
    });

});


const updateBook = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const result = await bookServices.updateBook(bookId, req.body)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Book updated successfully",
        data: result
    });

});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    await bookServices.deleteBook(bookId)

    res.status(200).json({
        success: true,
        message: "Book successfully deleted"
    })
});



export const bookController = {
    createBook,
    getAllBooks,
    getBookId,
    updateBook,
    deleteBook
}