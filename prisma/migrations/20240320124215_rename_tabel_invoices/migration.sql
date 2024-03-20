/*
  Warnings:

  - You are about to drop the `Invoces` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoces" DROP CONSTRAINT "Invoces_order_id_fkey";

-- DropTable
DROP TABLE "Invoces";

-- CreateTable
CREATE TABLE "Invoices" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
