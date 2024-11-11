import prisma from "../../../shared/prisma";

const createBorrow = async (bookId: string, memberId: string) => {

    await prisma.book.findUniqueOrThrow({
        where: {
            bookId
        }
    });

    await prisma.member.findUniqueOrThrow({
        where: {
            memberId
        }
    });

    const result = await prisma.borrowRecord.create({
        data: {
            bookId,
            memberId
        }
    })
    return result

};


export const borrowRecordServices = {
    createBorrow
}