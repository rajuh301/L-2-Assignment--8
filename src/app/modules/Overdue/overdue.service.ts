import prisma from "../../../shared/prisma";
import { subDays } from "date-fns";


const getOverDue = async () => {
    const overdueDate = subDays(new Date(), 14);

    const result = await prisma.borrowRecord.findMany({
        where: {
            borrowDate: {
                lte: overdueDate
            },
            returnDate: null

        }
    })
    
    return result
};


export const OverdueServices = {
    getOverDue
}