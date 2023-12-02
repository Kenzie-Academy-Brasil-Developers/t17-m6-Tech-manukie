/*
  Warnings:

  - You are about to drop the column `profile_pic` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `profile_pic` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "profile_pic";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile_pic";
