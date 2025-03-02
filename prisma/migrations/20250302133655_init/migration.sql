-- CreateTable
CREATE TABLE "Visita" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visita_pkey" PRIMARY KEY ("id")
);
