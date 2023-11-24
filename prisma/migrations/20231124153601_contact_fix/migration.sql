/*
  Warnings:

  - You are about to drop the column `cover_image` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "cover_image",
ADD COLUMN     "profile_pic" TEXT;
