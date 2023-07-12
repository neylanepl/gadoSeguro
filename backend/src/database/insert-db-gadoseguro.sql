INSERT INTO GadoSeguro.Fazenda (nome, sitio, cidade, cep, complemento, numero) 
    VALUES  ("Triste","Robin","Terezina","1236-12","Deserto",26),
			("Feliz","Garden","Rio de Janeiro","5678-90","Floresta",10),
			("Alegre","Sunshine","São Paulo","9876-54","Praia",5),
			("Tranquila","Harmony","Belo Horizonte","5432-10","Montanha",15);
    
INSERT INTO GadoSeguro.Bovino (Fazenda_idFazenda, Vaca_idVaca, reprodutor, sexo, data_nascimento, chifre, nome, peso, cor)
    VALUES  (1,null,false,"FEM","2000-03-22",true,"Marta", 312.5,"Preta"),
			(1,null,false,"MAS","2001-04-12",true,"Kaio", 302.5,"Marrom"),
			(1,null,false,"FEM","2010-11-21",true,"Kelly", 252.6,"Malhada"),
			(1,null,false,"MAS","2000-09-19",true,"Mathhes", 180.5,"Malhada"),
            
            (2,null,false,"FEM","2000-03-22",true,"Adele", 312.5,"Branca"),
			(2,null,false,"MAS","2001-04-12",true,"Miguel", 302.5,"Preta"),
			(2,null,false,"FEM","2010-11-21",true,"Agnes", 252.6,"Marrom"),
			(2,null,false,"MAS","2000-09-19",true,"Davi", 180.5,"Malhada"),
            
            (3,null,false,"FEM","2000-03-22",true,"Aiko", 312.5,"Preta"),
			(3,null,false,"MAS","2001-04-12",true,"Gabriel", 302.5,"Malhada"),
			(3,null,false,"FEM","2010-11-21",true,"Aisha", 252.6,"Preta"),
			(3,null,false,"MAS","2000-09-19",true,"Arthur", 180.5,"Malhada"),
            
            (4,null,false,"FEM","2000-03-22",true,"Akira", 312.5,"Malhada"),
			(4,null,false,"MAS","2001-04-12",true,"Lucas", 302.5,"Branca"),
			(4,null,false,"FEM","2010-11-21",true,"Alana", 252.6,"Malhada"),
			(4,null,false,"MAS","2000-09-19",true,"Pedro", 180.5,"Preta"); 
            
INSERT INTO GadoSeguro.Boi (Bovino_idBovino)
    VALUES  (2),
			(4),
            (6),
            (8),
            (10),
            (12),
            (14),
            (16);
INSERT INTO GadoSeguro.Vaca (idVaca, dar_leite, gravida, producao_leite)
    VALUES  (1, true, false, 5),
			(3, true, false, 8),
            (5, true, false, 6),
            (7, true, false, 1),
            (9, false, false, 0),
            (11, true, false, 10),
            (13, true, false, 3),
            (15, true, false, 8);
INSERT INTO GadoSeguro.CarteiraVacinacao (Bovino_idBovino)
    VALUES	(1),
            (2),
			(3),
            (4),
			(5),
            (7),
			(8),
            (9),
			(10),
            (11),
			(12),
            (13),
			(14),
            (15),
			(16);
 
 INSERT INTO GadoSeguro.Vacina (nome_vacina, info, fabricante) 
      VALUES ("Vac-131","Vacina para bovinos até 50 anos","Instituto Papelão"),
			 ("ECx-159","Vacina qualque","Centro de Pesquisa Epicolo"),
			 ("Vacx21","Sem ideia boa","Barrac de seu Zé");

INSERT INTO GadoSeguro.Dose (nome_vacina, lote, info, data_aplicada, data_prev) 
    VALUES  ("Vac-131","A-1","Vacina para bovinos até 50 anos","2000-09-13",null),
			("ECx-159","B-1","Vacina qualque","2010-10-22",null),
			("Vacx21","A-2","Sem ideia boa","2012-01-05","2013-01-05");

INSERT INTO GadoSeguro.Registra (CarteiraVacinacao_Bovino_idBovino, Dose_id)
    VALUES 	(1,1),
			(1,2),
            (2,1),
            (2,3);
INSERT INTO GadoSeguro.Pessoa (cpf, nome, email, senha, cargo)
      VALUES ('13548','Danilo','danilo@gmail.com','$2b$10$wQ491Z0xMIeM0iF7qSBuK.vdU9ZCxrks4b6xAl8nZjiQtJY/Q/O0i','veterinário'),
			 ('16546','baba','asdfa@hotmail.com','$2b$10$Av88ut5TEkNqIoqBZ/J6Cu3cxCbzmDHY9XsBoSZ0icFCjJwY5iN8W','empregado');
/* Senha de Danilo senha2 e baba Acesso*/