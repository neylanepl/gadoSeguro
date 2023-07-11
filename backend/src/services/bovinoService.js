const dbConnection = require("../database/Conect");

class BovinoService {
  //Adicionar Bovino
  async addBovino(bovinoTemp) {
    try {
      const connection = await dbConnection();
      const query = `INSERT INTO GadoSeguro.Bovino (Fazenda_idFazenda, Vaca_idVaca, reprodutor, sexo, data_nascimento, chifre, nome, peso, cor)
      VALUES (?,?,?,?,?,?,?,?,?)`;
      const values = [
        bovinoTemp.Fazenda_idFazenda,
        bovinoTemp.Vaca_idVaca,
        bovinoTemp.reprodutor,
        bovinoTemp.sexo,
        bovinoTemp.data_nascimento,
        bovinoTemp.chifre,
        bovinoTemp.nome,
        bovinoTemp.peso,
        bovinoTemp.cor
      ];
      await connection.execute(query, values);
      console.log("Bovino Adicionado");
    } catch (error) {
      console.log("Erro ao adicionar bovino:", error);
    }
  }

  //Pegar a lista de Bovinos 
  async getAllBovino() {
    try {
      const connection = await dbConnection();
      const [bovinos] = await connection.query(`SELECT * FROM  GadoSeguro.Bovino;`);
      console.log("Lista de Bovinos");
      return bovinos;
    } catch (error) {
      console.log("Erro a resgatar a lista bovino:", error);
    }
  }

  //Pegar a lista de Bovinos 
  async getAllBovinoFem(idFazenda) {
    try {
      const connection = await dbConnection();
      const [bovinos] = await connection.query(`SELECT bovinos.*, vacas.dar_leite, vacas.gravida, vacas.producao_leite FROM GadoSeguro.Bovino AS bovinos JOIN GadoSeguro.Vaca AS vacas ON bovinos.idBovino = vacas.idVaca WHERE bovinos.sexo = 'FEM' AND bovinos.Fazenda_idFazenda = ?;`,idFazenda);
      console.log("Lista de Bovinos");
      return bovinos;
    } catch (error) {
      console.log("Erro a resgatar a lista bovino:", error);
    }
  }
  //Pegar a lista de Bovinos 
  async getAllBovinoMas(idFazenda) {
    try {
      const connection = await dbConnection();
      const [bovinos] = await connection.query(`SELECT * FROM  GadoSeguro.Bovino WHERE sexo='MAS' AND Fazenda_idFazenda=?;`,idFazenda);
      console.log("Lista de Bovinos");
      return bovinos;
    } catch (error) {
      console.log("Erro a resgatar a lista bovino:", error);
    }
  }

   //Pegar a lista de Bovinos de uma fazenda
   async getBovinoFromFazenda(idFazenda) {
    try {
      const connection = await dbConnection();
      const [bovinos] = await connection.query(`SELECT * FROM  GadoSeguro.Bovino WHERE Fazenda_idFazenda=?;`,idFazenda);
      console.log("Lista de Bovinos da Fazenda: " + idFazenda);
      return bovinos;
    } catch (error) {
      console.log("Erro a resgatar a lista bovino da fazenda:", idFazenda + "|" + error);
    }
  }

  //Achar Bovino pelo ID
  async getBovinoId(idBovino) {
    try {
      const connection = await dbConnection();
      const [bovinos] = await connection.query(`SELECT * FROM  GadoSeguro.Bovino WHERE idBovino=?;`, idBovino);
      if (bovinos.length > 0) {
        return bovinos[0];
      }
      console.log("Bovino do ID",idBovino);
    } catch (error) {
      console.log("Erro a resgatar o bovino com ID:", idBovino + "|" + error);
    }
  }

  //Atualizar Bovino
  async updateBovino(idBovino, bovinoTemp) {
    try {
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Bovino SET Fazenda_idFazenda=?, Vaca_idVaca=?, reprodutor=?, sexo=?, data_nascimento=?, chifre=?, nome=?, peso=?, cor=? WHERE idBovino=?`;
      const values = [
        bovinoTemp.Fazenda_idFazenda,
        bovinoTemp.Vaca_idVaca,
        bovinoTemp.reprodutor,
        bovinoTemp.sexo,
        bovinoTemp.data_nascimento,
        bovinoTemp.chifre,
        bovinoTemp.nome,
        bovinoTemp.peso,
        bovinoTemp.cor,
        idBovino
      ];
      await connection.execute(query, values);
      console.log("Bovino Atualizado");
    } catch (error) {
      console.log("Erro ao atualizar bovino:", error);
    }
  }

  //Deletar Bovino
  async deleteBovino(idBovino) {
    try {
      const connection = await dbConnection();
      await connection.query(`DELETE FROM GadoSeguro.Bovino WHERE idBovino=?`);
      console.log("Bovino Deletado");
    } catch (error) {
      console.log("Erro ao Deletar bovino:", error);
    }
  }
}

module.exports = new BovinoService();