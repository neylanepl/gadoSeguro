const dbConnection = require("../database/Conect");

class IngredienteService {

  //Adicionar Ingrediente
  async addIngrediente(ingredienteTemp) {
    console.log("service");
    try {
      const connection = await dbConnection();
      const query = `
    INSERT INTO GadoSeguro.Ingrediente (nome, qnt_estoque, unidade)
    VALUES (?,?,?)
    `;
      const values = [
        ingredienteTemp.nome,
        Number(ingredienteTemp.qnt_estoque),
        Number(ingredienteTemp.unidade)
      ];

      await connection.execute(query, values);
      console.log("Objeto Ingrediente adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar o objeto Ingrediente:", error);
    }
  }

  //Retornar todas os Ingredientes
  async getAllIngrediente() {
    try {
      const connection = await dbConnection()
      const [Ingredientes] = await connection.query('SELECT * FROM GadoSeguro.Ingrediente;')
      return Ingredientes
    } catch (error) {
      console.log(error);
      return error
    }
  }

  //Retornar um Ingrediente pelo ID 
  async getIngredienteId(id) {
    try {
      const connection = await dbConnection()
      const [Ingredientes] = await connection.query('SELECT * FROM GadoSeguro.Ingrediente WHERE idIngrediente=?;', id)
      return Ingredientes
    } catch (error) {
      console.log(error);
      return error
    }
  }

  //Atualiza um Ingrediente pelo ID 
  async getUpdateIngrediente(id, IngredienteTemp) {
    try {
      const connection = await dbConnection();
      const query = `
    UPDATE GadoSeguro.Ingrediente SET nome=?, qnt_estoque=?, unidade=?
    WHERE idIngrediente=?
    `;
      const values = [
        IngredienteTemp.nome,
        IngredienteTemp.qnt_estoque,
        IngredienteTemp.unidade,
        id
      ];
      await connection.execute(query, values);
      Console.log("Dose Atualizada");
    } catch (error) {
      console.log("Problema em atualizar a dose", error);
      return error
    }
  }

  //Deletar Ingrediente pelo ID
  async deleteIngrediente(id) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Ingrediente WHERE idIngrediente=?;', id);
    } catch (error) {
      console.error("Erro ao deletar o objeto Ingrediente:", error);
    }
  }
}

module.exports = new IngredienteService();
