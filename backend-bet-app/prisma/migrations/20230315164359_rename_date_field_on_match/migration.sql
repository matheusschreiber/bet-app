/*
  Warnings:

  - You are about to drop the column `match_date` on the `Match` table. All the data in the column will be lost.
  - Added the required column `date` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "team_1_name" TEXT NOT NULL,
    "team_1_icon" TEXT NOT NULL,
    "team_1_score" INTEGER,
    "team_2_name" TEXT NOT NULL,
    "team_2_icon" TEXT NOT NULL,
    "team_2_score" INTEGER,
    "desc" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_Match" ("desc", "id", "team_1_icon", "team_1_name", "team_1_score", "team_2_icon", "team_2_name", "team_2_score") SELECT "desc", "id", "team_1_icon", "team_1_name", "team_1_score", "team_2_icon", "team_2_name", "team_2_score" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
