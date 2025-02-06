-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 06-02-2025 a las 19:42:02
-- Versión del servidor: 8.0.40
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `festivales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `idActividad` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `duracion` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `imagenActividad` varchar(10000) NOT NULL,
  `idFestival` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`idActividad`, `nombre`, `duracion`, `descripcion`, `imagenActividad`, `idFestival`) VALUES
(1, 'ffff', '800', 'gggg', 'https://i0.wp.com/holanews.com/wp-content/uploads/2024/01/rss-efecdafab4e45e4f8308cb93749fb414cc4dad5f8c7w.jpg?fit=1920%2C1280&ssl=1', 4),
(2, 'Hades66', '2', 'Cantante', 'https://cdn-images.dzcdn.net/images/artist/95e412ef4d1e6984ce24241ec60df410/1900x1900-000000-80-0-0.jpg', 5),
(3, 'SERRANITO', '2', 'Bocadillo de origen sevillano.', 'https://cdn-images.dzcdn.net/images/artist/95e412ef4d1e6984ce24241ec60df410/1900x1900-000000-80-0-0.jpg', 4),
(4, 'Ñengo Flow', '50', 'Bocadillo de origen sevillano.', 'https://cdn-images.dzcdn.net/images/artist/95e412ef4d1e6984ce24241ec60df410/1900x1900-000000-80-0-0.jpg', 8),
(5, 'jc reyes', '50', 'asaddd', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcertmusicfestival.com%2Fevents%2Fjc-reyes%2F&psig=AOvVaw2OUhGq5KP_vFHUXN2_Iz2E&ust=1738866574922000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj6rvaUrYsDFQAAAAAdAAAAABAE', 8),
(6, 'Ñengo Flow', '60', 'aaaddddd', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcertmusicfestival.com%2Fevents%2Fjc-reyes%2F&psig=AOvVaw2OUhGq5KP_vFHUXN2_Iz2E&ust=1738866574922000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj6rvaUrYsDFQAAAAAdAAAAABAE', 8),
(7, 'Hades66', '65', 'rererere', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcertmusicfestival.com%2Fevents%2Fjc-reyes%2F&psig=AOvVaw2OUhGq5KP_vFHUXN2_Iz2E&ust=1738866574922000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj6rvaUrYsDFQAAAAAdAAAAABAE', 8),
(8, 'SERRANITO', '90', 'Bocadillo de origen sevillano.', 'https://i.pinimg.com/474x/4c/3d/b4/4c3db4b160840293c1c97c38c5fda449.jpghttps://i.pinimg.com/474x/4c/3d/b4/4c3db4b160840293c1c97c38c5fda449.jpg', 8),
(9, 'Ñengo Flow', '', 'Bocadillo de origen sevillano.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcertmusicfestival.com%2Fevents%2Fjc-reyes%2F&psig=AOvVaw2OUhGq5KP_vFHUXN2_Iz2E&ust=1738866574922000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj6rvaUrYsDFQAAAAAdAAAAABAE', 23),
(13, 'Ñengo Flow', '65', 'Bocadillo de origen sevillano.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcertmusicfestival.com%2Fevents%2Fjc-reyes%2F&psig=AOvVaw2OUhGq5KP_vFHUXN2_Iz2E&ust=1738866574922000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj6rvaUrYsDFQAAAAAdAAAAABAE', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `festival`
--

CREATE TABLE `festival` (
  `idFestival` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `numEntradas` int NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `festival`
--

INSERT INTO `festival` (`idFestival`, `nombre`, `ciudad`, `numEntradas`, `fechaInicio`, `fechaFin`, `precio`) VALUES
(4, 'AnuelAA', 'sssaaa', 10000, '2025-02-20', '2025-02-22', 100),
(5, 'Ñengo Flow', 'Madrid', 80000, '2025-02-12', '2025-02-13', 60),
(8, 'Ñengo Flow', 'Sevilla', 80000, '2025-04-16', '2025-04-16', 86),
(9, 'Hades66', 'Madrid', 10000, '2025-02-27', '2025-02-28', 50),
(19, 'Festival Puro Latino', 'Sevilla', 600, '2025-02-22', '2025-02-24', 60),
(20, 'Hades66', 'Huelva', 88888, '2025-02-14', '2025-02-15', 80),
(21, 'Puro Trap', 'Sevilla', 80000, '2025-02-22', '2025-02-24', 80),
(23, 'October Fest', 'Malaga', 90000, '2025-02-26', '2025-02-28', 75),
(29, 'Latin Fest', 'Mostoles', 50000, '2025-02-21', '2025-02-23', 65),
(31, 'Puro Latino', 'Granada', 600, '2025-02-26', '2025-02-28', 50),
(32, 'Puro Latino', 'Barcelona', 45000, '2025-02-17', '2025-02-19', 75),
(34, 'Hades66', 'sdsdsd', 88888, '2025-02-20', '2025-02-22', 555),
(36, 'Hades66', 'Malaga', 80000, '2025-02-21', '2025-02-23', 60),
(37, 'Ñengo Flow', 'Sevilla', 80000, '2025-02-22', '2025-02-23', 55),

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`idActividad`),
  ADD KEY `FK` (`idFestival`);

--
-- Indices de la tabla `festival`
--
ALTER TABLE `festival`
  ADD PRIMARY KEY (`idFestival`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `idActividad` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `festival`
--
ALTER TABLE `festival`
  MODIFY `idFestival` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD CONSTRAINT `FK` FOREIGN KEY (`idFestival`) REFERENCES `festival` (`idFestival`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
