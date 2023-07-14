const dbConnection = require("../database/Conect");

class ReproducaoService {
  //Adicionar Fazenda
  async addReproducao(reproducaoTemp) {
    reproducaoTemp.dias_gestao = 0;
    reproducaoTemp.data_nascimento = new Date(reproducaoTemp.data_inicio);
    reproducaoTemp.data_nascimento.setDate(reproducaoTemp.data_nascimento.getDate() + 285);
    try {
      const connection = await dbConnection();
      const query = `
    INSERT INTO GadoSeguro.Reproducao (Vaca_idVaca, Boi_Bovino_idBovino, data_inicio, dias_gestao, data_nascimento) 
    VALUES (?,?,?,?,?)
    `;
      const values = [
        reproducaoTemp.Vaca_idVaca,
        reproducaoTemp.Boi_Bovino_idBovino,
        reproducaoTemp.data_inicio,
        reproducaoTemp.dias_gestao,
        reproducaoTemp.data_nascimento
      ];
      await connection.execute(query, values);
      console.log("Objeto Reproducao adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar a Reproducao:", error);
    }
  }
  //Retornar todas as Fazendas
  async getAllRepro() {
    try {
      const connection = await dbConnection()
      const [reproducoes] = await connection.query('SELECT * FROM Reproducao;')
      return reproducoes
    } catch (error) {
      console.log(error);
      return error
    }
  }

  //Achar reproducao pela IDvaca
  async findAllReproVaca(idvaca) {
    try {
      const connection = await dbConnection();
      const [reproFind] = await connection.query('SELECT * FROM GadoSeguro.Reproducao WHERE Vaca_idVaca=?;', idvaca);
      if (reproFind.length > 0) {
        return reproFind;
      }
    } catch (error) {
      console.error("Erro ao buscar o objeto fazenda:", error);
    }
  }

  //Achar reproducao pelo IDboi
  async findAllReproVaca(idboi) {
    try {
      const connection = await dbConnection();
      const [reproFind] = await connection.query('SELECT * FROM GadoSeguro.Reproducao WHERE Boi_Bovino_idBovino=?;', idboi);
      if (reproFind.length > 0) {
        return reproFind;
      }
    } catch (error) {
      console.error("Erro ao buscar o objeto fazenda:", error);
    }
  }
}

module.exports = new ReproducaoService();