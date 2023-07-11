const dbConnection = require("../database/Conect");

class RacasService {
  //Adicionar Fazenda
  async addRaca(racaTemp) {
    try {
      const connection = await dbConnection();
      const query = `
      INSERT INTO GadoSeguro.Racas (nome) 
      VALUES (?)
      `;
      const values = [
        racaTemp.nome
      ];
      await connection.execute(query, values);
      console.log("Objeto Raça adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar o objeto Raça:", error);
    }
  }
  //Retornar todas as Fazendas
  async getAllRacas() {
    try {
      const connection = await dbConnection()
      const [racas] = await connection.query('SELECT * FROM Racas;')
      return racas
    } catch (error) {
      console.log(error);
      return error
    }
  }

  //Achar Fazenda pelo ID
  async findRacaId(id) {
    try {
      const connection = await dbConnection();
      const [racaFind] = await connection.query('SELECT * FROM GadoSeguro.Racas WHERE Racas.id=?;', id);
      if (racaFind.length > 0) {
        return racaFind[0];
      }
    } catch (error) {
      console.error("Erro ao buscar o objeto Raca:", error);
    }
  }

  //Atualizar Fazenda
  async updateRacas(id, racaTemp) {
    try {
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Racas SET nome=? WHERE Racas.id=?`;
      const values = [
        racaTemp.nome,
        id
      ];
      await connection.execute(query, values);
      console.log("Objeto Raça atualizado com sucesso!");
      connection.end();
    } catch (error) {
      console.error("Erro ao atualizar o objeto Raça:", error);
    }
  }

  //Deletar Fazenda pelo ID
  async deleteRacas(id) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Racas WHERE Racas.id=?;', id);
    } catch (error) {
      console.error("Erro ao deletar o objeto fazenda:", error);
    }
  }
}

module.exports = new RacasService();