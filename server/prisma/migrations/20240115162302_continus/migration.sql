/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `flagAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `flagStatus` ENUM('ONLINE', 'AWAY', 'OFFLINE') NOT NULL DEFAULT 'OFFLINE',
    ADD COLUMN `img` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL;
