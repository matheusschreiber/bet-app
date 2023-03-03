/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "points" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "score_1" INTEGER NOT NULL,
    "score_2" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "Bet_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
