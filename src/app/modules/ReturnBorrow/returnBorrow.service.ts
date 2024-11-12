import prisma from "../../../shared/prisma";

const returnBook = async (borrowId: string) => {

    if (typeof borrowId !== 'string') {
        throw new Error("Invalid borrowId: Expected a string.");
    }
    // Find the borrow record
    await prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: borrowId
        }
    });

    const currentDate = new Date();

    // Update the borrow record
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: borrowId
        },
        data: {
            returnDate : currentDate
        }
    });

    return result;

};



export const returnBorrowServices = {
    returnBook
}