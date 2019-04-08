DROP DATABASE IF EXISTS `mashBnB`;
CREATE DATABASE mashBnB;

USE mashBnB;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;



DROP TABLE IF EXISTS `house_images`;

CREATE TABLE `house_images` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `house_id` INTEGER NOT NULL,
  `description` VARCHAR(100) NULL DEFAULT NULL,
   `main_image` Boolean NULL DEFAULT false,
   `image_url` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 */

