const dbConnection = require("../database/Conect");

//AHI = Alimentação has Ingrediente
class AHIService{

  //Adicionar Dose
async  addAHI(ahiTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Alimentação_has_Ingrediente (Alimentação_id, Ingrediente_idIngrediente, quantidade)
    VALUES (?,?,?)
    `;
    const values = [
      ahiTemp.quantidade,
      ahiTemp.Ingrediente_idIngrediente,
      ahiTemp.quantidade
    ];
    await connection.execute(query, values);
    console.log("Objeto ahi adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto ahi:", error);
  }
}

//Retornar todas as vacas
async getAllAHI() {
  try {
      const connection = await dbConnection()
      const [ahis] = await connection.query('SELECT * FROM GadoSeguro.Alimentação_has_Ingrediente;')
      return ahis
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getAHIId(idAlimentacao, idIngrediente) {
  try {
      const connection = await dbConnection()
      const [ahis] = await connection.query('SELECT * FROM GadoSeguro.Alimentação_has_Ingrediente WHERE Alimentação_id=? AND Ingrediente_idIngrediente=?;', [idAlimentacao, idIngrediente])
      return ahis
  } catch (error) {
      console.log(error);
      return error
  }
}

async updateAHI(idAlimentacao, idIngrediente, ahiTemp) {
  try {
    const connection = await dbConnection();
    const query = `UPDATE GadoSeguro.Alimentação_has_Ingrediente SET quantidade=? WHERE Alimentação_id=? AND Ingrediente_idIngrediente=?;`;
    const values = [
      ahiTemp.quantidade,
      idAlimentacao,
      idIngrediente
    ];
    await connection.execute(query, values);
    console.log("ahi Atualizado");
  } catch (error) {
    console.log("Erro ao atualizar ahi:", error);
  }
}

//Deletar Dose pelo ID
async  deleteAHI(idAlimentacao, idIngrediente) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Alimentação_has_Ingrediente WHERE Alimentação_id=? AND Ingrediente_idIngrediente=?;', [idAlimentacao, idIngrediente]);
  } catch (error) {
    console.error("Erro ao deletar o objeto ahi:", error);
  }
}
}

module.exports = new AHIService();