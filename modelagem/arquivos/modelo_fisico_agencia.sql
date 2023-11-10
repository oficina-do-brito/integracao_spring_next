CREATE DATABASE IF NOT EXISTS agencia;
USE agencia;
-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.
CREATE TABLE IF NOT EXISTS tb_users (
id_user INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(150),
email VARCHAR(150),
password VARCHAR(50),
telefone VARCHAR(50),
tipo_user INTEGER,
imagem TEXT,
data_login DATETIME,
fk_endereco INTEGER
);

CREATE TABLE IF NOT EXISTS tb_endereco (
id_endereco INTEGER AUTO_INCREMENT PRIMARY KEY,
CEP VARCHAR(9),
estado VARCHAR(2),
cidade VARCHAR(150),
bairro VARCHAR(150),
rua VARCHAR(150),
numero INTEGER
);

CREATE TABLE IF NOT EXISTS tb_fornecedor (
id_fornecedor INTEGER AUTO_INCREMENT PRIMARY KEY,
CNPJ VARCHAR(14),
tipo_servico INTEGER,
fk_user INTEGER,
FOREIGN KEY(fk_user) REFERENCES tb_users (id_user)
);

CREATE TABLE IF NOT EXISTS tb_administrador (
id_administrador INTEGER AUTO_INCREMENT PRIMARY KEY,
n_viagens_revisadas INTEGER,
fk_user INTEGER,
FOREIGN KEY(fk_user) REFERENCES tb_users (id_user)
);

CREATE TABLE IF NOT EXISTS tb_cliente (
id_cliente INTEGER AUTO_INCREMENT PRIMARY KEY,
RG VARCHAR(7),
CPF VARCHAR(11),
numero_viagens INTEGER,
cartao_credito VARCHAR(16),
fk_user INTEGER,
FOREIGN KEY(fk_user) REFERENCES tb_users (id_user)
);

CREATE TABLE IF NOT EXISTS tb_carrinho_compra (
id_carrinho INTEGER AUTO_INCREMENT PRIMARY KEY,
valor_total DECIMAL(5,2),
forma_pagamento INTEGER,
quant_items INTEGER,
fk_cliente INTEGER,
FOREIGN KEY(fk_cliente) REFERENCES tb_cliente (id_cliente)
);

CREATE TABLE IF NOT EXISTS tb_hospedagem (
id_hospedagem INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
imagem TEXT,
diaria INTEGER,
preco DECIMAL(5,2),
fk_origem INTEGER,
fk_fornecedor INTEGER,
FOREIGN KEY(fk_fornecedor) REFERENCES tb_fornecedor (id_fornecedor)
);

CREATE TABLE IF NOT EXISTS tb_passagem (
id_passagem INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150),
preco DECIMAL(5,2),
tipo INTEGER,
fk_fornecedor INTEGER,
fk_pacote INTEGER,
FOREIGN KEY(fk_fornecedor) REFERENCES tb_fornecedor (id_fornecedor)
);

CREATE TABLE IF NOT EXISTS tb_pacote_viagem (
id_pacote INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150),
valor_desconto INTEGER,
preco_total DECIMAL(5,2),
possui_hospedagem VARCHAR(50),
status VARCHAR(20),
meio_transporte VARCHAR(50),
imagem TEXT,
prazo_cancelamento DATETIME,
data_viagem DATETIME,
fk_origem INTEGER,
fk_hospedagem INTEGER,
fk_carrinho INTEGER,
FOREIGN KEY(fk_hospedagem) REFERENCES tb_hospedagem (id_hospedagem),
FOREIGN KEY(fk_carrinho) REFERENCES tb_carrinho_compra (id_carrinho)
);

CREATE TABLE IF NOT EXISTS tb_origem_destino (
id_origem INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(150),
imagem TEXT,
descricao TEXT,
tipo INTEGER,
fk_endereco INTEGER,
FOREIGN KEY(fk_endereco) REFERENCES tb_endereco (id_endereco)
);

CREATE TABLE IF NOT EXISTS revisa (
fk_administrador INTEGER,
fk_pacote INTEGER,
FOREIGN KEY(fk_administrador) REFERENCES tb_dministrador (id_administrador),
FOREIGN KEY(fk_pacote) REFERENCES tb_pacote_viagem (id_pacote)
);

ALTER TABLE tb_users ADD FOREIGN KEY(fk_endereco) REFERENCES tb_endereco (id_endereco);
ALTER TABLE tb_hospedagem ADD FOREIGN KEY(fk_origem) REFERENCES tb_origem_destino (id_origem);
ALTER TABLE tb_passagem ADD FOREIGN KEY(fk_pacote) REFERENCES tb_pacote_viagem (id_pacote);
ALTER TABLE tb_pacote_viagem ADD FOREIGN KEY(fk_origem) REFERENCES tb_origem_destino (id_origem);