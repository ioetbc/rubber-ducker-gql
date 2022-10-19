/*
  Warnings:

  - You are about to drop the column `technology` on the `Technology` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tech` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "technology",
ADD COLUMN     "tech" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
