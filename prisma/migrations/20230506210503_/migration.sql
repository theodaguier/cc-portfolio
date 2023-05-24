-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "year" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT[],
    "coverCollage" TEXT NOT NULL,
    "typeface" TEXT NOT NULL,
    "paper" TEXT NOT NULL,
    "print" TEXT NOT NULL,
    "bind" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "supervisor" TEXT NOT NULL,
    "imageCollected" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
