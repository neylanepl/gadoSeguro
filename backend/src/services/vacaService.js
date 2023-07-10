const dbConnection = require("../database/Conect");

class VacaService{

  //Adicionar Dose
async  addVaca(vacaTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Vaca (idVaca, dar_leite, gravida, producao_leite)
    VALUES (?,?,?,?)
    `;
    const values = [
      vacaTemp.idVaca,
      vacaTemp.dar_leite,
      vacaTemp.gravida,
      vacaTemp.producao_leite
    ];
    await connection.execute(query, values);
    console.log("Objeto Vaca adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Vaca:", error);
  }
}

//Retornar todas as vacas
async getAllVacas() {
  try {
      const connection = await dbConnection()
      const [doses] = await connection.query('SELECT * FROM GadoSeguro.Vaca;')
      if(doses.length > 0){
        Console.log(doses);
      }
      return doses
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma vaca pelo ID 
async getVacaId(id) {
  try {
      const connection = await dbConnection()
      const [doses] = await connection.query('SELECT * FROM GadoSeguro.Vaca WHERE idVaca=?;', id)
      if(doses.length > 0){
        Console.log(doses);
      }
      return doses
  } catch (error) {
      console.log(error);
      return error
  }
}

//Atualiza uma Vaca pelo ID 
async updateVaca(id, vacaTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    UPDATE GadoSeguro.Vaca SET dar_leite=?, gravida=?, producao_leite=?
    WHERE idVaca=?
    `;
    const values = [
        vacaTemp.dar_leite,
        vacaTemp.gravida,
        vacaTemp.producao_leite,
      id
    ];
    await connection.execute(query, values);
    Console.log("Dose Atualizada");
  } catch (error) {
      console.log("Problema em atualizar a dose",error);
      return error
  }
}

//Deletar Dose pelo ID
async  deleteVaca(id) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Vaca WHERE idVaca=?;', id);
  } catch (error) {
    console.error("Erro ao deletar o objeto fazendaDose:", error);
  }
}
}

module.exports = new VacaService();