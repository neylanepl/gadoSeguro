const dbConnection = require("../database/Conect");

class DietaService{

  //Adicionar Dose
async  addDieta(dietaTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Dieta (descricao, restricao_alimentar)
    VALUES (?,?)
    `;
    const values = [
      dietaTemp.descricao,
      dietaTemp.restricao_alimentar
    ];
    await connection.execute(query, values);
    console.log("Objeto Dieta adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Empregado:", error);
  }
}

//Retornar todas as vacas
async getAllDieta() {
  try {
      const connection = await dbConnection()
      const [dietas] = await connection.query('SELECT * FROM GadoSeguro.Dieta;')
      return dietas
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getDietaId(id) {
  try {
      const connection = await dbConnection()
      const [dietas] = await connection.query('SELECT * FROM GadoSeguro.Dieta WHERE idDieta=?;', id)
      return dietas
  } catch (error) {
      console.log(error);
      return error
  }
}

async updateDieta(id, dietaTemp) {
  try {
    const connection = await dbConnection();
    const query = `UPDATE GadoSeguro.Dieta SET descricao=?, restricao_alimentar=? WHERE idDieta=?`;
    const values = [
      dietaTemp.descricao,
      dietaTemp.restricao_alimentar,
      id
    ];
    await connection.execute(query, values);
    console.log("Dieta Atualizado");
  } catch (error) {
    console.log("Erro ao atualizar Dieta:", error);
  }
}

//Deletar Dose pelo ID
async  deleteDieta(id) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Dieta WHERE idDieta=?;', id);
  } catch (error) {
    console.error("Erro ao deletar o objeto Dieta:", error);
  }
}
}

module.exports = new DietaService();