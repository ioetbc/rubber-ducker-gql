/*
  Warnings:

  - Added the required column `userId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Technology_username_technology_key";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "userId" INTEGER NOT NULL;
