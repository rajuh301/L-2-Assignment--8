/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Author";

-- CreateTable
CREATE TABLE "bookReturn" (
    "bookId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "bookReturn_pkey" PRIMARY KEY ("bookId","memberId")
);

-- AddForeignKey
ALTER TABLE "bookReturn" ADD CONSTRAINT "bookReturn_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookReturn" ADD CONSTRAINT "bookReturn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
