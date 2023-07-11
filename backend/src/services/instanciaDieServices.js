const dbConnection = require("../database/Conect");


class InstanciaDietaService{

  //Adicionar Dose
async  addInstanciaDieta(instanciaDTemp) {
  try {
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Instancia_Dieta (Dieta_idDieta, Bovino_idBovino, data_inicio, data_fim)
    VALUES (?,?,?)
    `;
    const values = [
      instanciaDTemp.Dieta_idDieta,
      instanciaDTemp.Bovino_idBovino,
      instanciaDTemp.data_inicio,
      instanciaDTemp.data_fim
    ];
    await connection.execute(query, values);
    console.log("Objeto InstanciaD adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto InstanciaD:", error);
  }
}

//Retornar todas as vacas
async getAllInstanciaDieta() {
  try {
      const connection = await dbConnection()
      const [InstanciaDs] = await connection.query('SELECT * FROM GadoSeguro.Instancia_Dieta;')
      return InstanciaDs
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma empregado pelo cpf 
async getInstanciaDietaId(idInstaciaD) {
  try {
      const connection = await dbConnection()
      const [InstanciaDs] = await connection.query('SELECT * FROM GadoSeguro.Instancia_Dieta WHERE id=?;', idInstaciaD)
      return InstanciaDs
  } catch (error) {
      console.log(error);
      return error
  }
}

async updateInstanciaDieta(idInstaciaD, instanciaDTemp) {
  try {
    const connection = await dbConnection();
    const query = `UPDATE GadoSeguro.Instancia_Dieta SET Dieta_idDieta=?, Bovino_idBovino=?, data_inicio=?, data_fim=? WHERE id=?;`;
    const values = [
      instanciaDTemp.Dieta_idDieta,
      instanciaDTemp.Bovino_idBovino,
      instanciaDTemp.data_inicio,
      instanciaDTemp.data_fim,
      idInstaciaD
    ];
    await connection.execute(query, values);
    console.log("InstanciaD Atualizado");
  } catch (error) {
    console.log("Erro ao atualizar InstanciaD:", error);
  }
}

//Deletar Dose pelo ID
async  deleteInstanciaDieta(idInstaciaD) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Instancia_Dieta WHERE id=?;', idInstaciaD);
  } catch (error) {
    console.error("Erro ao deletar o objeto InstanciaD:", error);
  }
}
}

module.exports = new InstanciaDietaService();