-- Utilizar como referência para migrations e seeds

-- 'meu-guru-practice-test' para produção
-- 'meu-guru-practice-test-dev' para desenvolvimento
-- 'meu-guru-practice-test-test' para o avaliador
DROP DATABASE IF EXISTS `meu-guru-practice-test`;
CREATE DATABASE IF NOT EXISTS `meu-guru-practice-test`;

USE `meu-guru-practice-test`;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(32) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `email_un` (email)
);

-- CREATE TABLE IF NOT EXISTS products (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(100) NOT NULL,
--   company VARCHAR(100) NOT NULL,
--   gender VARCHAR(100) NOT NULL,
--   price DECIMAL(4,2) NOT NULL,
--   url_image VARCHAR(200) NOT NULL DEFAULT '',
--   PRIMARY KEY(id),
--   UNIQUE KEY `name` (name)
-- );

-- CREATE TABLE IF NOT EXISTS wallets (
--   id INT NOT NULL AUTO_INCREMENT,
--   balance DECIMAL(9,2) NOT NULL,
--   user_id INT NOT NULL,
--   PRIMARY KEY(id),
--   UNIQUE KEY `name` (name),
--   FOREIGN KEY (user_id) REFERENCES users(id)
-- );

INSERT INTO users (id, name, email, password, role) VALUES
  (1, 'Meu Guru Admin', 'adm@meuguru.com', '4eb81ee39d9389160ebe990cbecf77cb'), -- senha: md5('--adm2@22--')
    
-- INSERT INTO products (id, name, company, gender, price, url_image) VALUES
-- 	(1, 'La Petite Robe Noire 50ml', 'Guerlain', 'Feminino', 398.90, 'http://localhost:3001/images/guerlain-la-petite-robe-noire.png'),
-- 	(2, 'Sauvage 60ml', 'Dior', 'Masculino', 498.90, 'http://localhost:3001/images/dior-sauvage.png'),
-- 	(3, '212 VIP Rosé 50ml', 'Carolina Herrera', 'Feminino', 498.90, 'http://localhost:3001/images/carolina-herrera-212-vip-rose.png'),
-- 	(4, 'Lady Million 30ml', 'Paco Rabanne', 'Feminino', 320.00, 'http://localhost:3001/images/paco-rabanne-lady-million.png'),
-- 	(5, 'Invictus 100ml', 'Paco Rabanne', 'Masculino', 365.80, 'http://localhost:3001/images/paco-rabanne-invictus.png'),
-- 	(6, 'Euphoria 50ml', 'Calvin Klein', 'Feminino', 420.90, 'http://localhost:3001/images/calvin-klein-euphoria.png'),
-- 	(7, 'Light Blue 50ml', 'Dolce & Gabana', 'Feminino', 509.80, 'http://localhost:3001/images/dolce-gabbana-light-blue.png'),
-- 	(8, '1 Million 50ml', 'Paco Rabanne', 'Masculino', 279.80, 'http://localhost:3001/images/paco-rabanne-1-million.png'),
-- 	(9, 'Armani Code 50ml', 'Giorgio Armani', 'Masculino', 340.90, 'http://localhost:3001/images/giorgio-armani-armani-code.png'),
-- 	(10, 'Flowerbomb 30ml', 'Viktor & Rolf', 'Feminino', 598.90, 'http://localhost:3001/images/viktor&rolf-flowerbomb.png'),
-- 	(11, 'The One 50ml', 'Dolce & Gabbana', 'Masculino', 504.90, 'http://localhost:3001/images/dolce&gabana-the-one.png');

-- INSERT INTO wallets (id, balance, user_id) VALUES
--   (1, 970.10, 2);