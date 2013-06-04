-- phpMyAdmin SQL Dump
-- version 4.1-dev
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 04, 2013 at 08:31 AM
-- Server version: 5.5.30-MariaDB-log
-- PHP Version: 5.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `scoreboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `level` varchar(10) NOT NULL,
  `message` varchar(250) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
