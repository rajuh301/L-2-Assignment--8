import prisma from "../../../shared/prisma";


const createMebmer = async (data: any) => {

  
    const result = await prisma.member.create({
        data
    })
    return result
};


const getAllMember = async () => {
    const result = await prisma.member.findMany();
    return result
};


const getMemberById = async (memberId: string) => {


    await prisma.member.findUniqueOrThrow({
        where: {
            memberId
        }
    });

    const result = await prisma.member.findUnique({
        where: {
            memberId
        }
    });
    return result
};


const updateMamber = async (memberId: string, data: any) => {

    await prisma.member.findUniqueOrThrow({
        where: {
            memberId
        }
    });

    const result = await prisma.member.update({
        where: {
            memberId
        },
        data
    });

    return result
};


const deleteMember = async (memberId: string) => {

    await prisma.member.findUniqueOrThrow({
        where: {
            memberId
        }
    });

    const result = await prisma.member.delete({
        where: {
            memberId
        }
    });
    return result


}


export const memberServices = {
    createMebmer,
    getAllMember,
    getMemberById,
    updateMamber,
    deleteMember
};