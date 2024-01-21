-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 21 jan. 2024 à 23:39
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `wiki-list`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `publish_date` datetime NOT NULL,
  `last_update` datetime NOT NULL,
  `isValidated` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int NOT NULL,
  `character_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `character_id` (`character_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `publish_date`, `last_update`, `isValidated`, `user_id`, `character_id`) VALUES
(9, '2024-01-18 08:39:43', '2024-01-19 16:08:29', 1, 12, 18),
(21, '2024-01-21 04:00:16', '2024-01-21 04:02:00', 0, 12, 34);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `label`) VALUES
(1, 'Fire Emblem: Path of Radiance'),
(2, 'Test Value');

-- --------------------------------------------------------

--
-- Structure de la table `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `characters`
--

INSERT INTO `characters` (`id`, `name`, `description`) VALUES
(18, 'Shinon ', 'Shinon is a playable character in Fire Emblem: Path of Radiance and Fire Emblem: Radiant Dawn. He is a veteran Archer of the Greil Mercenaries.'),
(34, 'Shamir', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dignissimos rerum vero ex cumque nobis! Sapiente error quibusdam id quae tenetur iure aliquam officia fugit mollitia nihil, nostrum, veritatis possimus!');

-- --------------------------------------------------------

--
-- Structure de la table `characters_category`
--

DROP TABLE IF EXISTS `characters_category`;
CREATE TABLE IF NOT EXISTS `characters_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `character_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `character_id` (`character_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `characters_category`
--

INSERT INTO `characters_category` (`id`, `character_id`, `category_id`) VALUES
(2, 18, 1),
(7, 34, 2);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `date` date NOT NULL,
  `user_id` int NOT NULL,
  `article_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `picture`
--

DROP TABLE IF EXISTS `picture`;
CREATE TABLE IF NOT EXISTS `picture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `src` varchar(50) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `character_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `character_id` (`character_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `picture`
--

INSERT INTO `picture` (`id`, `src`, `alt`, `character_id`) VALUES
(14, 'image-1705688546129.webp', 'Shinon avatar', 18),
(29, 'image-1705809616941.webp', 'Shamir avatar', 34);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` char(60) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `account_creation_date` datetime NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `account_creation_date`, `role_id`) VALUES
(12, 'toto', '$2b$10$1iPXz.8I/R3FH2Ddz6MDaOlRfW83MyRnwxAD66DpRs9G2S1MdjMQi', NULL, '2024-01-16 14:38:49', 1),
(18, 'patate', '$2b$10$8ZuNTK0wl4pRV8lb3vr75.oX2CHBRWwHgi3l1Y3V9v0cWssm20Q5C', NULL, '2024-01-18 16:44:03', 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `character_id` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `characters_category`
--
ALTER TABLE `characters_category`
  ADD CONSTRAINT `characters_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `characters_category_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `picture`
--
ALTER TABLE `picture`
  ADD CONSTRAINT `picture_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
