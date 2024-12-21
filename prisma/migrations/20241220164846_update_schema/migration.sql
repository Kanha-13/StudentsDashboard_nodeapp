/*
  Warnings:

  - You are about to drop the column `age` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - Added the required column `studentName` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_email_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "age",
DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "studentName" TEXT NOT NULL;