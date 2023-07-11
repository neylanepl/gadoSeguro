const dbConnection = require("../database/Conect");

//InstanciaAlimentacao = Alimentação has Ingrediente
class InstanciaAlimentacaoService{

  //Adicionar Dose
async  addInstanciaAlimentacao(instanciaATemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Instancia_Alimentacao (Alimentação_id, Bovino_idBovino, Pessoa_cpf, hora)
    VALUES (?,?,?,?)
    `;
    const values = [
      instanciaATemp.Alimentação_id,
      instanciaATemp.Bovino_idBovino,
      instanciaATemp.Pessoa_cpf,
      instanciaATemp.hora
    ];
    await connection.execute(query, values);
    console.log("Objeto instanciaA adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto instanciaA:", error);
  }
}

//Retornar todas as vacas
async getAllInstanciaAlimentacao() {
  try {
      const connection = await dbConnection()
      const [instanciaAs] = await connection.query('SELECT * FROM GadoSeguro.Instancia_Alimentacao;')
      return instanciaAs
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getInstanciaAlimentacaoId(idInstaciaA) {
  try {
      const connection = await dbConnection()
      const [instanciaAs] = await connection.query('SELECT * FROM GadoSeguro.Instancia_Alimentacao WHERE id=?;', idInstaciaA)
      return instanciaAs
  } catch (error) {
      console.log(error);
      return error
  }
}

async updateInstanciaAlimentacao(idInstaciaA, instanciaATemp) {
  try {
    const connection = await dbConnection();
    const query = `UPDATE GadoSeguro.Instancia_Alimentacao SET Alimentação_id=?, Bovino_idBovino=?, Pessoa_cpf=?, hora=? WHERE id=?;`;
    const values = [
      instanciaATemp.Alimentação_id,
      instanciaATemp.Bovino_idBovino,
      instanciaATemp.Pessoa_cpf,
      instanciaATemp.hora,
      idInstaciaA
    ];
    await connection.execute(query, values);
    console.log("instanciaA Atualizado");
  } catch (error) {
    console.log("Erro ao atualizar instanciaA:", error);
  }
}

//Deletar Dose pelo ID
async  deleteInstanciaAlimentacao(idInstaciaA) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Instancia_Alimentacao WHERE id=?;', idInstaciaA);
  } catch (error) {
    console.error("Erro ao deletar o objeto instanciaA:", error);
  }
}
}

module.exports = new InstanciaAlimentacaoService();