import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OverdueServices } from "./overdue.service";


const getOverDue = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const { data } = await OverdueServices.getOverDue();

    if (data.length === 0) {

        res.status(200).json({
            success: true,
            status: 200,
            message: "No overdue books",
            data: []
        });
    }


    res.status(200).json({
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: data

    })


});


export const overdueController = {
    getOverDue
}