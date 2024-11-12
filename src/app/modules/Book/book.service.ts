import prisma from "../../../shared/prisma";
import { TBook } from "./book.interface";

const createBook = async (data: TBook) => {
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

const updateBook = async (bookId: string, data: TBook) => {

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