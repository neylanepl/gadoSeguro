const dbConnection = require("../database/Conect");

class AlimentacaoService{

  //Adicionar Dose
async  addAlimentacao(alimentacaoTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Alimentação (nome, falta_cosumir, qnt_diaria_recomendada)
    VALUES (?,?,?)
    `;
    const values = [
      alimentacaoTemp.Fazenda_idfazenda,
      alimentacaoTemp.Pessoa_cpf
    ];
    await connection.execute(query, values);
    console.log("Objeto Alimentação adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Empregado:", error);
  }
}

//Retornar todas as vacas
async getAllAlimentacao() {
  try {
      const connection = await dbConnection()
      const [alimentacoes] = await connection.query('SELECT * FROM GadoSeguro.Alimentação;')
      return alimentacoes
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getAlimentacaoId(id) {
  try {
      const connection = await dbConnection()
      const [alimentacoes] = await connection.query('SELECT * FROM GadoSeguro.Alimentação WHERE id=?;', id)
      return alimentacoes
  } catch (error) {
      console.log(error);
      return error
  }
}

async updateAlimentacao(id, alimentacaoTemp) {
  try {
    const connection = await dbConnection();
    const query = `UPDATE GadoSeguro.Alimentação SET nome=?, falta_cosumir=?, qnt_diaria_recomendada=?WHERE id=?`;
    const values = [
      alimentacaoTemp.nome,
      alimentacaoTemp.falta_cosumir,
      alimentacaoTemp.qnt_diaria_recomendada,
      id
    ];
    await connection.execute(query, values);
    console.log("Alimentação Atualizado");
  } catch (error) {
    console.log("Erro ao atualizar Alimentação:", error);
  }
}

//Deletar Dose pelo ID
async  deleteAlimentacao(id) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Alimentação WHERE id=?;', id);
  } catch (error) {
    console.error("Erro ao deletar o objeto Alimentação:", error);
  }
}
}

module.exports = new AlimentacaoService();