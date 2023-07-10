const dbConnection = require("../database/Conect");

class RegistraServices{

  //Adicionar Carteira de Vacinação
async  addRegistro(registro) {
    console.log(registro)
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO gadoseguro.registra (CarteiraVacinacao_Bovino_idBovino, Dose_id)
    VALUES (?,?)
    `;
    const values = [
        registro.CarteiraVacinacao_Bovino_idBovino,
        registro.Dose_id
    ];
    console.log(query, values)
    await connection.execute(query, values);
    console.log("Objeto Registro da dose doi sucesso!");
  } catch (error) {
    console.error("Erro no registro da dose:", error);
  }
}

//Retornar todas as carteiras de vacinação
async getRegistros() {
  try {
      const connection = await dbConnection()
      const [Carteiras] = await connection.query('SELECT * FROM GadoSeguro.registra;')
      console.log("Registro encontradas com sucesso!");
      return Carteiras
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma Registros de um bovino 
async getRegistrosBovino(idBovino) {
    try {
        const connection = await dbConnection()
        const [Registros] = await connection.query('SELECT * FROM GadoSeguro.registra CarteiraVacinacao_Bovino_idBovino;', idBovino)
        console.log("Registro do bovino encontradas com sucesso!");
        return Registros
    } catch (error) {
        console.log(error);
        return error
    }
}

//Retornar os Registros de uma dose 
async getRegistrosBovino(idDose) {
    try {
        const connection = await dbConnection()
        const [Registros] = await connection.query('SELECT * FROM GadoSeguro.registra Dose_id;', idDose)
        console.log("Registro das doses encontradas com sucesso!");
        return Registros
    } catch (error) {
        console.log(error);
        return error
    }
}

//Deletar Carteira pelo ID
async  deleteRegistro(idBovino, idDose) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.registra WHERE CarteiraVacinacao_Bovino_idBovino=? AND Dose_id;', [idBovino, idDose]);
    console.log("Registro excluida com sucesso!");
  } catch (error) {
    console.log("Erro ao deletar o objeto Registro:", error);
  }
}
}

module.exports = new RegistraServices();