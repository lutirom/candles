/*
  Warnings:

  - A unique constraint covering the columns `[img]` on the table `Products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Products_img_key" ON "Products"("img");
