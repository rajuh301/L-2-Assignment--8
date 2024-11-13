import prisma from "../../../shared/prisma";
import { subDays } from "date-fns";

const getOverDue = async () => {
    const overdueDate = subDays(new Date(), 14);

    const overdueRecords = await prisma.borrowRecord.findMany({
        where: {
            borrowDate: {
                lte: overdueDate,
            },
            returnDate: null,
        },
        include: {
            book: true,
            member: true,
        },
    });


    const overdueList = overdueRecords.map(record => {
        const overdueDays = Math.floor(
            (new Date().getTime() - new Date(record.borrowDate).getTime()) / (1000 * 60 * 60 * 24)
        ) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays: overdueDays,
        };
    });

    return {
  
        data: overdueList,
    };
};

export const OverdueServices = {
    getOverDue,
};
