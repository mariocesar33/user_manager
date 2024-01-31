/*
  Warnings:

  - A unique constraint covering the columns `[username,email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- DropIndex
DROP INDEX "users_username_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_username_email_key" ON "users"("username", "email");
