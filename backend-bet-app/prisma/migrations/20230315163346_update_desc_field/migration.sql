/*
  Warnings:

  - Made the column `desc` on table `Match` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "team_1_name" TEXT NOT NULL,
    "team_1_icon" TEXT NOT NULL,
    "team_2_name" TEXT NOT NULL,
    "team_2_icon" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "match_date" DATETIME NOT NULL
);
INSERT INTO "new_Match" ("desc", "id", "match_date", "team_1_icon", "team_1_name", "team_2_icon", "team_2_name") SELECT "desc", "id", "match_date", "team_1_icon", "team_1_name", "team_2_icon", "team_2_name" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
