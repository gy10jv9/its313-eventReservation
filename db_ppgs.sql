-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 07:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ppgs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblevents`
--

CREATE TABLE `tblevents` (
  `eId` int(11) NOT NULL,
  `eventTitle` varchar(200) NOT NULL,
  `location` varchar(100) NOT NULL,
  `reserverName` varchar(200) NOT NULL,
  `reserverEmail` varchar(200) NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `timeStart` time NOT NULL,
  `timeEnd` time NOT NULL,
  `numParticipants` int(11) NOT NULL,
  `withAircon` tinyint(1) NOT NULL,
  `withLights` tinyint(1) NOT NULL,
  `numTablesLong` int(11) NOT NULL,
  `numTablesRound` int(11) NOT NULL,
  `numChairs` int(11) NOT NULL,
  `otherEquipments` varchar(2000) NOT NULL,
  `instructions` varchar(2000) NOT NULL,
  `bookingStatus` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblevents`
--

INSERT INTO `tblevents` (`eId`, `eventTitle`, `location`, `reserverName`, `reserverEmail`, `dateStart`, `dateEnd`, `timeStart`, `timeEnd`, `numParticipants`, `withAircon`, `withLights`, `numTablesLong`, `numTablesRound`, `numChairs`, `otherEquipments`, `instructions`, `bookingStatus`) VALUES
(1, 'Event Sample 1', 'Auditorium', 'Name Sample 1', 'Email Sample 1', '2024-01-01', '2024-01-02', '08:00:00', '12:00:00', 100, 0, 0, 1, 0, 100, '', '', 'pending'),
(2, 'Event Sample 2', 'Little Theatre', 'Name Sample 2', 'Email Sample 2', '2024-01-02', '2024-01-02', '08:00:00', '12:00:00', 100, 0, 0, 1, 0, 100, '', '', 'pending'),
(3, 'Event Sample 3 - edited', 'Quadrangle', 'Johnny Bravo', 'bravo@gmail.com', '2024-01-19', '2024-02-09', '08:00:00', '22:00:00', 100, 1, 0, 10, 10, 100, 'Lorem ipsum dolor sit amet, consectetur.\r\n', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\r\n', 'pending'),
(5, 'sample 5', 'mars', 'banban', '', '2024-02-01', '2024-02-01', '06:07:00', '06:06:00', 10, 0, 0, 0, 0, 0, 'banabanabanabanbana', 'banabanabanaba', 'pending'),
(6, 'sample 5', 'mars', 'banban', '', '2024-02-01', '2024-02-01', '06:07:00', '06:06:00', 10, 0, 0, 0, 0, 0, 'banabanabanabanbana', 'banabanabanaba', 'pending'),
(7, 'samplerge6', 'wqgwhe', 'noowfnhfq', 'geagve@gmail.com', '2024-02-03', '2024-02-10', '08:09:00', '02:06:00', 10, 0, 0, 0, 0, 0, 'aegetshest', 'gwgw3egw3gw4g4w', 'pending'),
(8, 'samplerge6', 'wqgwhe', 'noowfnhfq', 'geagve@gmail.com', '2024-01-27', '2024-01-25', '08:09:00', '02:06:00', 10, 0, 0, 0, 0, 0, 'aegetshest', 'gwgw3egw3gw4g4w', 'approved'),
(9, 'afefe', 'efefe', 'fefefe', 'efefe@ry7ku8', '2024-02-10', '2024-02-10', '09:08:00', '08:09:00', 100, 0, 0, 0, 0, 0, '', '', 'pending'),
(10, 'afedfe', 'grhtj', 'fegtrjkuyl', 'ukuku@ema', '2024-02-22', '2024-03-02', '07:09:00', '04:05:00', 0, 0, 0, 0, 0, 0, '', '', 'pending'),
(11, 'afedfe', 'grhtj', 'fegtrjkuyl', 'ukuku@ema', '2024-02-22', '2024-03-02', '07:09:00', '04:05:00', 0, 0, 0, 0, 0, 0, '', '', 'pending'),
(12, 'egrg', 'p\'', 'uk', 'a@f', '2024-02-09', '2024-02-03', '04:06:00', '07:09:00', 1, 0, 0, 0, 0, 0, '', '', 'pending'),
(13, 'tjhyj', 'efew', 'kuku', 'df@grf', '2024-01-27', '2024-02-10', '08:09:00', '09:09:00', 0, 0, 0, 0, 0, 0, '', '', 'pending'),
(14, 'tjhyj', 'efew', 'kuku', 'df@grf', '2024-01-27', '2024-02-10', '08:09:00', '09:09:00', 0, 0, 0, 0, 0, 0, '', '', 'pending'),
(15, 'tjhyj', 'efew', 'kuku', 'df@grf', '2024-01-27', '2024-02-10', '08:09:00', '09:09:00', 0, 0, 0, 0, 0, 0, '', '', 'pending'),
(16, 'wefw', 'uj6j', 'gy5uj', '', '2024-02-03', '2024-02-03', '05:06:00', '05:06:00', 0, 0, 0, 0, 0, 0, '', '', 'pending');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblevents`
--
ALTER TABLE `tblevents`
  ADD PRIMARY KEY (`eId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblevents`
--
ALTER TABLE `tblevents`
  MODIFY `eId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
