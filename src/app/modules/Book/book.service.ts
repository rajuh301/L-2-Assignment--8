import prisma from "../../../shared/prisma";

const createBook = async (data: any) => {
    const result = await prisma.book.create({
        data: data
    });
    return result
};


const getAllBooks = async () => {
    const result = await prisma.book.findMany();
    return result
};


const getBookId = async (bookId: string) => {

    await prisma.book.findUniqueOrThrow({
        where: {
            bookId
        }
    });

    const result = await prisma.book.findUnique({
        where: {
            bookId: bookId
        }
    });
    return result
};

const updateBook = async (bookId: string, data: any) => {

    await prisma.book.findUniqueOrThrow({
        where: {
            bookId
        }
    });

    const result = await prisma.book.update({
        where: {
            bookId
        },
        data
    })
    return result

};



//------- Not working delete function

const deleteBook = async (bookId: string) => {

    await prisma.book.findUniqueOrThrow({
        where: {
            bookId
        }
    });

    const result = await prisma.book.delete({
        where: {
            bookId
        }
    })

    return result

};




export const bookServices = {
    createBook,
    getAllBooks,
    getBookId,
    updateBook,
    deleteBook
}