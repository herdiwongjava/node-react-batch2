-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: db_movie_prisma
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('901a1cc2-1919-4604-a116-a6b6d1235e32','82bc1acd79b04ade1b0abd97795bc43226f496849b6d4a5186fc18b2a954769f','2025-10-17 06:13:52.677','20251017061352_create_table_user',NULL,NULL,'2025-10-17 06:13:52.472',1),('e5e943cb-2fd5-4814-a65c-51325ca34006','ec38936681003edab81eedf94ef4ef8c64bffd12255c5512e7234452d9477f09','2025-10-16 01:57:20.569','20251016015720_add_table_movies',NULL,NULL,'2025-10-16 01:57:20.530',1),('ff8014cb-b00c-4855-aebb-a7fe62740ef9','4efebfcd3d019829b36ad7430d639511477d3802a462ae06179c4d15e90f8258','2025-10-16 08:25:07.656','20251016082507_relation_table_category',NULL,NULL,'2025-10-16 08:25:07.549',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Category_userId_fkey` (`userId`),
  CONSTRAINT `Category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Comedy','2025-10-17 01:06:38.370','2025-10-17 01:06:38.370',NULL),(4,'Mistery','2025-10-17 02:16:14.049','2025-10-17 02:16:14.049',NULL),(5,'Actoin','2025-10-17 02:16:27.704','2025-10-17 02:16:27.704',NULL),(6,'Fantasy','2025-10-17 02:16:33.279','2025-10-17 02:16:33.279',NULL),(7,'Thriller','2025-10-17 02:16:38.120','2025-10-27 06:07:59.304',NULL),(8,'Animation','2025-10-17 07:24:49.256','2025-10-27 05:30:05.781',NULL),(18,'Drama','2025-10-27 05:32:34.404','2025-10-27 05:33:22.236',NULL),(19,'Sci-Fi','2025-10-27 05:33:38.115','2025-10-27 05:33:38.115',NULL),(20,'Documenter','2025-10-27 05:34:20.083','2025-10-27 05:34:20.083',NULL),(26,'Romance','2025-10-28 00:43:25.975','2025-10-28 00:43:25.975',NULL),(27,'Adventure','2025-10-28 00:43:39.175','2025-10-28 00:43:39.175',NULL),(28,'Political','2025-10-28 00:43:56.218','2025-10-28 00:43:56.218',NULL),(29,'Western','2025-10-28 00:44:35.972','2025-10-28 00:44:35.972',NULL),(30,'Horor','2025-10-28 01:00:44.582','2025-10-28 01:00:44.582',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `categoryId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Movies_categoryId_fkey` (`categoryId`),
  KEY `Movies_userId_fkey` (`userId`),
  CONSTRAINT `Movies_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Movies_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (30,'Demon Slayer',2025,'2025-10-23 05:37:01.537','2025-10-24 07:33:52.788',8,NULL),(31,'Space X Family',2025,'2025-10-23 05:37:47.909','2025-10-28 03:21:22.979',8,NULL),(32,'Arif Of The CEO',1999,'2025-10-23 05:38:40.149','2025-10-24 07:33:42.212',7,NULL),(33,'The Avenger',2000,'2025-10-23 05:42:41.553','2025-10-23 05:42:41.553',5,NULL),(34,'Naruto',2000,'2025-10-23 06:42:56.739','2025-10-24 07:33:10.916',5,NULL),(35,'Dragon Ball',2023,'2025-10-23 08:07:49.589','2025-10-23 08:07:49.589',8,NULL),(36,'One Piece',2003,'2025-10-23 08:14:20.468','2025-10-24 05:42:06.076',8,NULL),(37,'Hunter Y Hunter',2001,'2025-10-23 08:16:14.740','2025-10-24 05:28:08.182',5,NULL),(67,'Tuna Ikan Sakti Sekali',2001,'2025-10-24 05:39:34.612','2025-10-27 06:32:38.087',1,NULL),(68,'Until Down',2025,'2025-10-28 01:00:30.617','2025-10-28 01:00:30.617',4,NULL),(69,'Almarhum',2024,'2025-10-28 01:01:18.035','2025-10-28 01:01:18.035',30,NULL),(70,'Final Destination 99',2026,'2025-10-28 01:01:53.724','2025-10-28 01:01:53.724',27,NULL),(71,'Wolf Man',2025,'2025-10-28 01:02:15.757','2025-10-28 01:02:15.757',5,NULL),(72,'A Working Man',2025,'2025-10-28 01:02:52.069','2025-10-28 01:02:52.069',28,NULL),(73,'Nobody 2',2022,'2025-10-28 01:03:18.896','2025-10-28 01:03:18.896',7,NULL),(74,'Inside Out 2',2024,'2025-10-28 03:05:55.880','2025-10-28 03:05:55.880',19,NULL),(75,'Deadpool & Wolverine',2025,'2025-10-28 03:07:19.228','2025-10-28 03:07:19.228',18,NULL),(76,'Despicable Me 4',2004,'2025-10-28 03:09:11.884','2025-10-28 03:09:11.884',8,NULL),(77,'Dune: Part Two',2022,'2025-10-28 03:09:43.396','2025-10-28 03:09:43.396',19,NULL),(78,'Moana 2',2022,'2025-10-28 03:10:18.714','2025-10-28 03:10:18.714',5,NULL),(79,'Godzilla x Kong',2022,'2025-10-28 03:11:09.026','2025-10-28 03:11:50.693',4,NULL),(80,'Mufasa: The Lion King',2025,'2025-10-28 03:11:29.631','2025-10-28 03:11:29.631',4,NULL),(81,'Wicked',2025,'2025-10-28 03:16:50.307','2025-10-28 03:16:50.307',1,NULL),(82,'Modal Nekad',2025,'2025-10-28 03:17:11.042','2025-10-28 03:17:11.042',5,NULL);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'herdian@to.com','herdian','$2b$10$Z/8Oy1j9Ju7Xv4n3l6pq6.dEktt2QFbbgt7y1SdVXEWcltP9n9ZaO'),(2,'herdi@anto.com','herdian','$2b$10$iAy7S7bsuoZQXp4itHxpeerDyct7gHTOcXYBt0M4hLOn5jJpMx2tK'),(3,'herdiant@o.com','herdian','$2b$10$fHoJi5WyPbpxy4IUmHYC4OjYUEpwb/jOL2R554h3hUP8xL9I.LFum');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-28 13:30:28
