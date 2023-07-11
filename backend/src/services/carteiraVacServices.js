const dbConnection = require("../database/Conect");

class CarteiraVacService{

  //Adicionar Carteira de Vacinação
async  addCarteiraVac(CarteiraVacTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.CarteiraVacinacao (Bovino_idBovino)
    VALUES (?)
    `;
    const values = [
        CarteiraVacTemp.Bovino_idBovino
    ];
    await connection.execute(query, values);
    console.log("Objeto Carteira adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Carteira:", error);
  }
}

//Retornar todas as carteiras de vacinação
async getAllCarteiras() {
  try {
      const connection = await dbConnection()
      const [Carteiras] = await connection.query('SELECT * FROM GadoSeguro.CarteiraVacinacao;')
      console.log("Carteira encontradas com sucesso!");
      return Carteiras
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma Carteiras pelo ID 
async getCarteiraVacId(id) {
  try {
      const connection = await dbConnection();
      const [Carteiras] = await connection.query('SELECT * FROM GadoSeguro.CarteiraVacinacao WHERE Bovino_idBovino=?;', id);
      console.log("Carteira achada com sucesso!");
      return Carteiras[0];
  } catch (error) {
      console.log(error);
      return error
  }
}

//Deletar Carteira pelo ID
async  deleteCarteira(id) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.CarteiraVacinacao WHERE Bovino_idBovino=?;', id);
    console.log("Carteira excluida com sucesso!");
  } catch (error) {
    console.log("Erro ao deletar o objeto CarteiraVacinacao:", error);
  }
}
}

module.exports = new CarteiraVacService();