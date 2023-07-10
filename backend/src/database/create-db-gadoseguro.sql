-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema GadoSeguro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema GadoSeguro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GadoSeguro` DEFAULT CHARACTER SET utf8 ;
USE `GadoSeguro` ;

-- -----------------------------------------------------
-- Table `GadoSeguro`.`Vacina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Vacina` (
  `nome_vacina` VARCHAR(45) NOT NULL,
  `info` VARCHAR(45) NOT NULL,
  `fabricante` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nome_vacina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Dose`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Dose` (
  `idDose` INT NOT NULL AUTO_INCREMENT,
  `nome_vacina` VARCHAR(45) NOT NULL,
  `lote` VARCHAR(15) NOT NULL,
  `info` VARCHAR(45) NOT NULL,
  `data_aplicada` DATE NOT NULL,
  `data_prev` DATE NULL,
  PRIMARY KEY (`idDose`),
  CONSTRAINT `fk_Dose_Vacina`
    FOREIGN KEY (`nome_vacina`)
    REFERENCES `GadoSeguro`.`Vacina` (`nome_vacina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Fazenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Fazenda` (
  `idFazenda` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sitio` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  PRIMARY KEY (`idFazenda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Vaca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Vaca` (
  `idVaca` INT NOT NULL,
  `dar_leite` TINYINT NOT NULL,
  `gravida` TINYINT NOT NULL,
  `producao_leite` DOUBLE NOT NULL,
  PRIMARY KEY (`idVaca`),
  CONSTRAINT `fk_vaca_Bovino1`
    FOREIGN KEY (`idVaca`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Bovino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Bovino` (
  `idBovino` INT NOT NULL AUTO_INCREMENT,
  `Fazenda_idFazenda` INT NOT NULL,
  `Vaca_idVaca` INT NULL,
  `reprodutor` TINYINT NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `chifre` TINYINT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `peso` FLOAT NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idBovino`),
  INDEX `fk_Bovino_Fazenda1_idx` (`Fazenda_idFazenda` ASC) VISIBLE,
  INDEX `fk_Bovino_Vaca1_idx` (`Vaca_idVaca` ASC) VISIBLE,
  CONSTRAINT `fk_Bovino_Fazenda1`
    FOREIGN KEY (`Fazenda_idFazenda`)
    REFERENCES `GadoSeguro`.`Fazenda` (`idFazenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bovino_Vaca1`
    FOREIGN KEY (`Vaca_idVaca`)
    REFERENCES `GadoSeguro`.`Vaca` (`idVaca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Pessoa` (
  `cpf` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `cargo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cpf`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Ingrediente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Ingrediente` (
  `idIngrediente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `qnt_estoque` FLOAT NOT NULL,
  `unidade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idIngrediente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`CarteiraVacinacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`CarteiraVacinacao` (
  `Bovino_idBovino` INT NOT NULL,
  PRIMARY KEY (`Bovino_idBovino`),
  CONSTRAINT `fk_CarteiraVacinacao_Bovino1`
    FOREIGN KEY (`Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Registra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Registra` (
  `CarteiraVacinacao_Bovino_idBovino` INT NOT NULL,
  `Dose_id` INT NOT NULL,
  PRIMARY KEY (`Dose_id`, `CarteiraVacinacao_Bovino_idBovino`),
  INDEX `fk_CarteiraVacinacao_has_Dose_Dose1_idx` (`Dose_id` ASC) VISIBLE,
  INDEX `fk_CarteiraVacinacao_has_Dose_CarteiraVacinacao1_idx` (`CarteiraVacinacao_Bovino_idBovino` ASC) VISIBLE,
  CONSTRAINT `fk_CarteiraVacinacao_has_Dose_CarteiraVacinacao1`
    FOREIGN KEY (`CarteiraVacinacao_Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`CarteiraVacinacao` (`Bovino_idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CarteiraVacinacao_has_Dose_Dose1`
    FOREIGN KEY (`Dose_id`)
    REFERENCES `GadoSeguro`.`Dose` (`idDose`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Boi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Boi` (
  `Bovino_idBovino` INT NOT NULL,
  PRIMARY KEY (`Bovino_idBovino`),
  CONSTRAINT `fk_Boi_Bovino1`
    FOREIGN KEY (`Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Reproducao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Reproducao` (
  `Vaca_idVaca` INT NOT NULL,
  `Boi_Bovino_idBovino` INT NOT NULL,
  `data_inicio` DATE NOT NULL,
  `dias_gestao` INT NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`Vaca_idVaca`, `Boi_Bovino_idBovino`, `data_inicio`),
  INDEX `fk_Reproducao_Vaca1_idx` (`Vaca_idVaca` ASC) VISIBLE,
  INDEX `fk_Reproducao_Boi1_idx` (`Boi_Bovino_idBovino` ASC) VISIBLE,
  CONSTRAINT `fk_Reproducao_Vaca1`
    FOREIGN KEY (`Vaca_idVaca`)
    REFERENCES `GadoSeguro`.`Vaca` (`idVaca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reproducao_Boi1`
    FOREIGN KEY (`Boi_Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Boi` (`Bovino_idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Empregados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Empregados` (
  `Fazenda_idFazenda` INT NOT NULL,
  `Pessoa_cpf` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Fazenda_idFazenda`, `Pessoa_cpf`),
  INDEX `fk_Fazenda_has_Pessoa_Pessoa1_idx` (`Pessoa_cpf` ASC) VISIBLE,
  INDEX `fk_Fazenda_has_Pessoa_Fazenda1_idx` (`Fazenda_idFazenda` ASC) VISIBLE,
  CONSTRAINT `fk_Fazenda_has_Pessoa_Fazenda1`
    FOREIGN KEY (`Fazenda_idFazenda`)
    REFERENCES `GadoSeguro`.`Fazenda` (`idFazenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Fazenda_has_Pessoa_Pessoa1`
    FOREIGN KEY (`Pessoa_cpf`)
    REFERENCES `GadoSeguro`.`Pessoa` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Dieta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Dieta` (
  `idDieta` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  `restricao_alimentar` VARCHAR(45) NULL,
  PRIMARY KEY (`idDieta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Racas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Racas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Racas_has_Bovino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Racas_has_Bovino` (
  `Racas_id` INT NOT NULL,
  `Bovino_idBovino` INT NOT NULL,
  PRIMARY KEY (`Racas_id`, `Bovino_idBovino`),
  INDEX `fk_Racas_has_Bovino_Bovino1_idx` (`Bovino_idBovino` ASC) VISIBLE,
  INDEX `fk_Racas_has_Bovino_Racas1_idx` (`Racas_id` ASC) VISIBLE,
  CONSTRAINT `fk_Racas_has_Bovino_Racas1`
    FOREIGN KEY (`Racas_id`)
    REFERENCES `GadoSeguro`.`Racas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Racas_has_Bovino_Bovino1`
    FOREIGN KEY (`Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Instancia_Dieta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Instancia_Dieta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Dieta_idDieta` INT NOT NULL,
  `Bovino_idBovino` INT NOT NULL,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Instancia_Dieta_Dieta1_idx` (`Dieta_idDieta` ASC) VISIBLE,
  INDEX `fk_Instancia_Dieta_Bovino1_idx` (`Bovino_idBovino` ASC) VISIBLE,
  CONSTRAINT `fk_Instancia_Dieta_Dieta1`
    FOREIGN KEY (`Dieta_idDieta`)
    REFERENCES `GadoSeguro`.`Dieta` (`idDieta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Instancia_Dieta_Bovino1`
    FOREIGN KEY (`Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Alimentação`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Alimentação` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `falta_consumir` DOUBLE NOT NULL,
  `qnt_diaria_recomendada` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Alimentação_has_Ingrediente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Alimentação_has_Ingrediente` (
  `Alimentação_id` INT NOT NULL,
  `Ingrediente_idIngrediente` INT NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`Alimentação_id`, `Ingrediente_idIngrediente`),
  INDEX `fk_Alimentação_has_Ingrediente_Ingrediente1_idx` (`Ingrediente_idIngrediente` ASC) VISIBLE,
  INDEX `fk_Alimentação_has_Ingrediente_Alimentação1_idx` (`Alimentação_id` ASC) VISIBLE,
  CONSTRAINT `fk_Alimentação_has_Ingrediente_Alimentação1`
    FOREIGN KEY (`Alimentação_id`)
    REFERENCES `GadoSeguro`.`Alimentação` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Alimentação_has_Ingrediente_Ingrediente1`
    FOREIGN KEY (`Ingrediente_idIngrediente`)
    REFERENCES `GadoSeguro`.`Ingrediente` (`idIngrediente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Dieta_has_Alimentação`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Dieta_has_Alimentação` (
  `Dieta_idDieta` INT NOT NULL,
  `Alimentação_id` INT NOT NULL,
  PRIMARY KEY (`Dieta_idDieta`, `Alimentação_id`),
  INDEX `fk_Dieta_has_Alimentação_Alimentação1_idx` (`Alimentação_id` ASC) VISIBLE,
  INDEX `fk_Dieta_has_Alimentação_Dieta1_idx` (`Dieta_idDieta` ASC) VISIBLE,
  CONSTRAINT `fk_Dieta_has_Alimentação_Dieta1`
    FOREIGN KEY (`Dieta_idDieta`)
    REFERENCES `GadoSeguro`.`Dieta` (`idDieta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Dieta_has_Alimentação_Alimentação1`
    FOREIGN KEY (`Alimentação_id`)
    REFERENCES `GadoSeguro`.`Alimentação` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GadoSeguro`.`Instancia_Alimentacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GadoSeguro`.`Instancia_Alimentacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Alimentação_id` INT NOT NULL,
  `Bovino_idBovino` INT NOT NULL,
  `Pessoa_cpf` INT NOT NULL,
  `hora` TIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Instancia_Alimentacao_Alimentação1_idx` (`Alimentação_id` ASC) VISIBLE,
  INDEX `fk_Instancia_Alimentacao_Bovino1_idx` (`Bovino_idBovino` ASC) VISIBLE,
  INDEX `fk_Instancia_Alimentacao_Pessoa1_idx` (`Pessoa_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_Instancia_Alimentacao_Alimentação1`
    FOREIGN KEY (`Alimentação_id`)
    REFERENCES `GadoSeguro`.`Alimentação` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Instancia_Alimentacao_Bovino1`
    FOREIGN KEY (`Bovino_idBovino`)
    REFERENCES `GadoSeguro`.`Bovino` (`idBovino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Instancia_Alimentacao_Pessoa1`
    FOREIGN KEY (`Pessoa_cpf`)
    REFERENCES `GadoSeguro`.`Pessoa` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;