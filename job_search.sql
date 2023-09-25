-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-09-2023 a las 22:56:13
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `job_search`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuil` bigint NOT NULL,
  `address` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`id`, `name`, `cuil`, `address`, `city`, `website`, `email`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Sol Technologies', 24804646015, 'Av 9 de Julio 1200', 'CABA', 'www.soltechnologies.com', 'rrhh@soltechnologies.com', 'Sol.png', NULL, NULL),
(2, 'IT Database', 24124341171, 'Av Rivadavia 230 - 2°B', 'CABA', 'www.it-database.com.ar', 'consultas-rrhh@it.com', 'ITD.png', NULL, NULL),
(3, 'IT Lightning', 27453448490, 'Paseo García 520', 'Tucuman', 'www.itlightning.com', 'itlightning@rrhh.com', 'ITL.png', NULL, NULL),
(4, 'Recursos Tecnológicos', 34419600557, 'Av Avellaneda 45', 'CABA', 'www.rrtt.com.ar', 'rrhh@rrtt.com', 'RT.png', NULL, NULL),
(5, 'Oran Tech', 20769668803, 'Nazca 4500', 'Cordoba', 'www.orantech.ar', 'orantech-rrhh@correo.com', 'OT.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_id` bigint UNSIGNED NOT NULL,
  `title` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requirements` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `benefits` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_company_id_foreign` (`company_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `jobs`
--

INSERT INTO `jobs` (`id`, `company_id`, `title`, `requirements`, `location`, `salary`, `area`, `type`, `benefits`, `modality`, `img`, `created_at`, `updated_at`) VALUES
(1, 1, 'React Developer', 'We are seeking a highly skilled React Developer with a minimum of three years of hands-on experience in React development. The ideal candidate should possess strong proficiency in JavaScript, React.js, and related technologies. You will collaborate with our team to design and implement user interfaces, ensuring a seamless user experience. Solid problem-solving skills and a passion for staying updated with industry trends are essential.', 'CABA', '300K-500K', 'Desarrollo', 'Full Time', 'medical insurance, free vacation days', 'Remoto', 'React.png', NULL, NULL),
(2, 5, 'Desarrollador Java Sr', 'Estamos en busca de un experimentado Desarrollador Java con más de cinco años de experiencia en Java y Spring. El candidato ideal deberá tener un sólido dominio de estas tecnologías, así como habilidades de resolución de problemas y capacidad para trabajar en equipo. Será responsable de diseñar, desarrollar y mantener aplicaciones Java de alta calidad que cumplan con los estándares de rendimiento y seguridad de la empresa.', 'CABA', '400K', 'Desarrollo', 'Full Time', 'Prepaga de primer nivel, dia de cumpleaños libre', 'Remoto', 'Java.png', NULL, NULL),
(3, 4, 'UX Designer', 'Buscamos un Diseñador UX con experiencia en Canva y Figma. Deberás crear experiencias de usuario excepcionales, colaborando estrechamente con equipos de diseño y desarrollo. Requisitos: habilidades sólidas en Canva y Figma, comprensión profunda de la investigación de usuarios y diseño de interfaces intuitivas. Si eres creativo, apasionado por la usabilidad y puedes comunicar tus ideas de manera efectiva, ¡te invitamos a unirte a nuestro equipo!', 'Tucuman', '200K-250K', 'Diseño', 'Part Time', 'Prepaga', 'Hibrido', 'Ux.png', NULL, NULL),
(4, 1, 'Administrador Linux', 'Estamos en busca de un Administrador Linux con experiencia en gestión de servidores y sistemas Unix. Deberás mantener la estabilidad y seguridad de nuestros sistemas, gestionar actualizaciones y resolver problemas técnicos. Requisitos: sólidos conocimientos de Linux, experiencia en scripting, habilidades de resolución de problemas y capacidad para trabajar en equipo.', 'Mar del Plata', '150K', 'Redes', 'Part Time', '-', 'Hibrido', 'Linux.png', NULL, NULL),
(5, 4, 'Python Developer', 'We are seeking a Python Developer with expertise in Python and Django. The ideal candidate should have a strong background in Python programming and hands-on experience with Django web framework. Responsibilities include designing and implementing scalable web applications. Strong problem-solving skills and the ability to work collaboratively are essential. If you are passionate about Python and Django development, we encourage you to apply.', 'CABA', '300K-350K', 'Desarrollo', 'Full Time', 'Health insurance', 'Presencial', 'Python.png', NULL, NULL),
(6, 4, 'Desarrollador Mean', 'Estamos en búsqueda de un Desarrollador MEAN con experiencia en MongoDB, Express.js, Angular y Node.js. El candidato ideal debe tener un sólido conocimiento de estas tecnologías para diseñar, desarrollar y mantener aplicaciones web escalables y de alto rendimiento.', 'CABA', '220K-400K', 'Desarrollo', 'Full Time', 'Dia de cumpleaños libre, snacks', 'Remoto', 'Angular.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_10_184316_create_companies_table', 1),
(6, '2023_09_10_190059_create_jobs_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
