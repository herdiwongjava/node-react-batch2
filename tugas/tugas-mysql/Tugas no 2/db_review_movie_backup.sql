-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_review_movie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_review_movie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_review_movie` DEFAULT CHARACTER SET utf8 ;
USE `db_review_movie` ;

-- -----------------------------------------------------
-- Table `db_review_movie`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`user` (
  `id` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`profile` (
  `id` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `biodata` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_profile_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_profile_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_review_movie`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`cast`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`cast` (
  `id` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `age` VARCHAR(45) NULL,
  `biodata` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`genre` (
  `id` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`movie` (
  `id` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NULL,
  `summary` VARCHAR(255) NULL,
  `year` INT NULL,
  `poster` VARCHAR(255) NULL,
  `genre_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `genre_id`),
  INDEX `fk_movie_genre1_idx` (`genre_id` ASC) VISIBLE,
  CONSTRAINT `fk_movie_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `db_review_movie`.`genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`role` (
  `id` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `cast_id` VARCHAR(45) NOT NULL,
  `movie_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_cast1_idx` (`cast_id` ASC) VISIBLE,
  INDEX `fk_role_movie1_idx` (`movie_id` ASC) VISIBLE,
  CONSTRAINT `fk_role_cast1`
    FOREIGN KEY (`cast_id`)
    REFERENCES `db_review_movie`.`cast` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `db_review_movie`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_review_movie`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_review_movie`.`review` (
  `id` VARCHAR(45) NOT NULL,
  `rating` VARCHAR(45) NULL,
  `critics` VARCHAR(45) NULL,
  `movie_id` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_review_movie1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_review_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `db_review_movie`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_review_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_review_movie`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
