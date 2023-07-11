const dbConnection = require("../database/Conect");

//AHI = Alimentação has Ingrediente
class DHAService{

  //Adicionar Dose
async  addDHA(dhaTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Dieta_has_Alimentação (Dieta_idDieta, Alimentação_id)
    VALUES (?,?)
    `;
    const values = [
      dhaTemp.Dieta_idDieta,
      dhaTemp.Alimentação_id
    ];
    await connection.execute(query, values);
    console.log("Objeto dha adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto dha:", error);
  }
}

//Retornar todas as vacas
async getAllAHI() {
  try {
      const connection = await dbConnection()
      const [dhas] = await connection.query('SELECT * FROM GadoSeguro.Dieta_has_Alimentação;')
      return dhas
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getAHIId(idDieta, idAlimentacao) {
  try {
      const connection = await dbConnection()
      const [dhas] = await connection.query('SELECT * FROM GadoSeguro.Dieta_has_Alimentação WHERE Dieta_idDieta=? Alimentação_id=?;', [idDieta, idAlimentacao])
      return dhas
  } catch (error) {
      console.log(error);
      return error
  }
}

//Deletar Dose pelo ID
async  deleteDHA(idDieta, idAlimentacao) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Alimentação_has_Ingrediente WHERE Dieta_idDieta=? Alimentação_id=?;', [idDieta, idAlimentacao]);
  } catch (error) {
    console.error("Erro ao deletar o objeto dha:", error);
  }
}
}

module.exports = new DHAService();