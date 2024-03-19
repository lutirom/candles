-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "client_lastname" TEXT;

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "np_ref" TEXT NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);
