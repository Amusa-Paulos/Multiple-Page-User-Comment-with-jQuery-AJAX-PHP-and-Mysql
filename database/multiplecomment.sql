-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 02, 2021 at 12:31 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `multiplecomment`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comment` mediumtext NOT NULL,
  `page` text NOT NULL,
  `commentId` varchar(20) DEFAULT NULL,
  `commentType` varchar(10) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `email`, `comment`, `page`, `commentId`, `commentType`, `date`) VALUES
(1, 'Paulos Ab', 'paulosab@gmail.com', 'I love this post very well', 'firstblogpage', NULL, 'main', '2021-01-31 14:00:28'),
(2, 'AdminH', 'adminh@paulosab.com', 'thank you very much paulos ab', 'firstblogpage', '1', 'reply', '2021-01-31 14:01:44'),
(3, 'Elon Musk', 'elonworld@tesla.com', 'this is my favorite article of the year', 'firstblogpage', NULL, 'main', '2021-01-31 14:02:19'),
(4, 'Amusa Abayomi', 'abayomi@gm.com', 'this is my best article of the year', 'secondblogpage', NULL, 'main', '2021-01-31 14:03:04'),
(5, 'AdminK', 'admink@paulosab.com', 'thank you very much abayomi, i really appreciate', 'secondblogpage', '4', 'reply', '2021-01-31 14:03:53'),
(6, 'Bill Gates', 'billgates@microsoft.com', 'I like this post too much, keep it up', 'firstblogpage?article=elon-musk-is-my-role-model', NULL, 'main', '2021-01-31 14:05:33'),
(7, 'Space Guy', 'guyspace@g.com', 'because you like this article i also like it', 'firstblogpage?article=elon-musk-is-my-role-model', '6', 'reply', '2021-01-31 14:06:21');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
