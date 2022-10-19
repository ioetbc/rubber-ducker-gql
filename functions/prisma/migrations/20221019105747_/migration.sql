/*
  Warnings:

  - You are about to drop the column `userId` on the `Technology` table. All the data in the column will be lost.
  - You are about to drop the column `avatarURL` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `githubURL` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_avatarURL_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_githubURL_key";

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarURL",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "githubURL";
