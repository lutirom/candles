/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Admin_users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Admin_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Admin_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Admin_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin_users" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_users_email_key" ON "Admin_users"("email");
