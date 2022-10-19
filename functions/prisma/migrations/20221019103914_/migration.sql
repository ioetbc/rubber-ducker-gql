/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubURL]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[avatarURL]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `githubURL` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "avatarURL" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "githubURL" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "technology" TEXT NOT NULL,
    "proficiency" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Technology_username_technology_key" ON "Technology"("username", "technology");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_githubURL_key" ON "User"("githubURL");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_avatarURL_key" ON "User"("avatarURL");
