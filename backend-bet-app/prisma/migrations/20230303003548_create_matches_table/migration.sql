/*
  Warnings:

  - Added the required column `id_match` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "team_1_name" TEXT NOT NULL,
    "team_1_icon" TEXT NOT NULL,
    "team_2_name" TEXT NOT NULL,
    "team_2_icon" TEXT NOT NULL,
    "match_date" DATETIME NOT NULL
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
    CONSTRAINT "Bet_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bet_id_match_fkey" FOREIGN KEY ("id_match") REFERENCES "Match" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bet" ("date", "id", "id_user", "score_1", "score_2", "status") SELECT "date", "id", "id_user", "score_1", "score_2", "status" FROM "Bet";
DROP TABLE "Bet";
ALTER TABLE "new_Bet" RENAME TO "Bet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
