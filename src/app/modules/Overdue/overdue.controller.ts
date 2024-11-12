import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OverdueServices } from "./overdue.service";


const getOverDue = catchAsync(async (req: Request, res: Response) => {
    const result = await OverdueServices.getOverDue()


    res.status(200).json({
        success: true,
        message: "Overdue borrow list fetched",
        data:
            result

    })


});


export const overdueController = {
    getOverDue
}