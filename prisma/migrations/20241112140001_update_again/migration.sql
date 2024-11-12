/*
  Warnings:

  - The `returnDate` column on the `BorrowRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BorrowRecord" DROP COLUMN "returnDate",
ADD COLUMN     "returnDate" TIMESTAMP(3);
