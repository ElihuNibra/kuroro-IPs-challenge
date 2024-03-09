-- CreateTable
CREATE TABLE "Tracked" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tracked_pkey" PRIMARY KEY ("id")
);
