const dbConnection = require("../database/Conect");

class EmpregadoService{

  //Adicionar Dose
async  addEmpregado(empregadoTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Empregados (Fazenda_idFazenda, Pessoa_cpf)
    VALUES (?,?)
    `;
    const values = [
      empregadoTemp.Fazenda_idfazenda,
      empregadoTemp.Pessoa_cpf
    ];
    await connection.execute(query, values);
    console.log("Objeto Empregado adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Empregado:", error);
  }
}

//Retornar todas as vacas
async getAllEmpregado() {
  try {
      const connection = await dbConnection()
      const [empregados] = await connection.query('SELECT * FROM GadoSeguro.Empregados;')
      return empregados
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getEmpregadoCPF(cpf) {
  try {
      const connection = await dbConnection()
      const [empregados] = await connection.query('SELECT * FROM GadoSeguro.Empregados WHERE Pessoa_cpf=?;', cpf)
      return empregados
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar os empregados da fazenda 
async getEmpregadoIdFazenda(idFazenda) {
  try {
      const connection = await dbConnection()
      const [empregados] = await connection.query('SELECT * FROM GadoSeguro.Empregados WHERE Fazenda_idFazenda=?;', idFazenda)
      return empregados
  } catch (error) {
      console.log(error);
      return error
  }
}

//Deletar Dose pelo ID
async  deleteEmpregado(cpf) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Empregado WHERE cpf=?;', cpf);
  } catch (error) {
    console.error("Erro ao deletar o objeto fazendaDose:", error);
  }
}
}

module.exports = new EmpregadoService();