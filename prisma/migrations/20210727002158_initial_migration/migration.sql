-- CreateTable
CREATE TABLE "Elements" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "atomic_no" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "cgb" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Elements.name_unique" ON "Elements"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Elements.atomic_no_unique" ON "Elements"("atomic_no");

-- CreateIndex
CREATE UNIQUE INDEX "Elements.symbol_unique" ON "Elements"("symbol");
