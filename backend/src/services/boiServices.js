const dbConnection = require("../database/Conect");

class BoiService{

  //Adicionar Dose
async  addBoi(boiTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Boi (Bovino_idBovino)
    VALUES (?)
    `;
    const values = [
      boiTemp.Bovino_idBovino
    ];
    await connection.execute(query, values);
    console.log("Objeto Boi adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Boi:", error);
  }
}

//Retornar todas as bois
async getAllBois() {
  try {
      const connection = await dbConnection()
      const [bois] = await connection.query('SELECT * FROM GadoSeguro.Boi;')
      if(bois.length > 0){
        console.log(bois);
      }
      return bois
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma boi pelo ID 
async getBoiId(id) {
  try {
      const connection = await dbConnection()
      const [bois] = await connection.query('SELECT * FROM GadoSeguro.Boi WHERE Bovino_idBovino=?;', id)
      return bois[0]
  } catch (error) {
      console.log(error);
      return error
  }
}

//Deletar Dose pelo ID
async  deleteBoi(id) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Boi WHERE Bovino_idBovino=?;', id);
  } catch (error) {
    console.error("Erro ao deletar o objeto fazendaDose:", error);
  }
}
}

module.exports = new BoiService();