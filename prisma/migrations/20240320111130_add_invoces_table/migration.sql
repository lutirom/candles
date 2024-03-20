-- CreateTable
CREATE TABLE "Invoces" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "Invoces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoces" ADD CONSTRAINT "Invoces_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
