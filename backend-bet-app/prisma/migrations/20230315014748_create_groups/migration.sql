/*
  Warnings:

  - Added the required column `points` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result_win` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score_win` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_admin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prize" TEXT NOT NULL,
    CONSTRAINT "Group_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ManyToMany" (
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "groupId"),
    CONSTRAINT "ManyToMany_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ManyToMany_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "id_match" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "score_1" INTEGER NOT NULL,
    "score_2" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "score_win" BOOLEAN NOT NULL,
    "result_win" BOOLEAN NOT NULL,
    "points" INTEGER NOT NULL,
    CONSTRAINT "Bet_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bet_id_match_fkey" FOREIGN KEY ("id_match") REFERENCES "Match" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bet" ("date", "id", "id_match", "id_user", "score_1", "score_2", "status") SELECT "date", "id", "id_match", "id_user", "score_1", "score_2", "status" FROM "Bet";
DROP TABLE "Bet";
ALTER TABLE "new_Bet" RENAME TO "Bet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
