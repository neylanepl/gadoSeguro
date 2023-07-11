const dbConnection = require("../database/Conect");

class FazendaService {
  //Adicionar Fazenda
  async addFazenda(fazendaTemp) {
    try {
      const connection = await dbConnection();
      //let idFazenda = 1;
      const query = `
    INSERT INTO GadoSeguro.Fazenda (nome, sitio, cidade, cep, complemento, numero) 
    VALUES (?,?,?,?,?,?)
    `;
      const values = [
        fazendaTemp.nome,
        fazendaTemp.sitio,
        fazendaTemp.cidade,
        fazendaTemp.cep,
        fazendaTemp.complemento,
        fazendaTemp.numero
      ];
      await connection.execute(query, values);
      console.log("Objeto fazenda adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar o objeto fazenda:", error);
    }
  }
  //Retornar todas as Fazendas
  async getAllFazendas() {
    try {
      const connection = await dbConnection()
      const [fazendas] = await connection.query('SELECT * FROM Fazenda;')
      return fazendas
    } catch (error) {
      console.log(error);
      return error
    }
  }

  //Achar Fazenda pelo ID
  async findFazendaId(idFazenda) {
    try {
      const connection = await dbConnection();
      const [fazendaFind] = await connection.query('SELECT * FROM GadoSeguro.Fazenda WHERE idFazenda=?;', idFazenda);
      if (fazendaFind.length > 0) {
        return fazendaFind[0];
      }
    } catch (error) {
      console.error("Erro ao buscar o objeto fazenda:", error);
    }
  }

  //Atualizar Fazenda
  async updateFazenda(idFazenda, fazendaTemp) {
    try {
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Fazenda SET nome=?, sitio=?, cidade=?, cep=?, complemento=?, numero=? WHERE idFazenda=?`;
      const values = [
        fazendaTemp.nome,
        fazendaTemp.sitio,
        fazendaTemp.cidade,
        fazendaTemp.cep,
        fazendaTemp.complemento,
        fazendaTemp.numero,
        idFazenda
      ];
      await connection.execute(query, values);
      console.log("Objeto fazenda atualizado com sucesso!");
      connection.end();
    } catch (error) {
      console.error("Erro ao atualizar o objeto fazenda:", error);
    }
  }

  //Deletar Fazenda pelo ID
  async deleteFazenda(idFazenda) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Fazenda WHERE idFazenda=?;', idFazenda);
    } catch (error) {
      console.error("Erro ao deletar o objeto fazenda:", error);
    }
  }
}

module.exports = new FazendaService();