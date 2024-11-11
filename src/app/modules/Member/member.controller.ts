import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { memberServices } from "./member.service";
import sendResponse from "../../../shared/sendResponse";


const createMebmer = catchAsync(async (req: Request, res: Response) => {

    const result = await memberServices.createMebmer(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Member created successfully",
        data: result
    });

});


const getAllMember = catchAsync(async (req: Request, res: Response) => {
    const result = await memberServices.getAllMember();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Members retrieved successfully",
        data: result
    });
});


const getMemberById = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params
    const result = await memberServices.getMemberById(memberId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Members retrieved successfully",
        data: result
    });
});


const updateMamber = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params
    const result = await memberServices.updateMamber(memberId, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Members updated successfully",
        data: result
    });

});


const deleteMember = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params
    await memberServices.deleteMember(memberId);

    res.status(200).json({
        success: true,
        message: "Member successfully deleted"
    })
})


export const memberController = {
    createMebmer,
    getAllMember,
    getMemberById,
    updateMamber,
    deleteMember
}