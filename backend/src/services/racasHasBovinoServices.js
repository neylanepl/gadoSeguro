const dbConnection = require("../database/Conect");

//rhb = Raca Has Bovino
class rhbServices{

  //Adicionar ligação de Bovino a Raça
  async addRacaBovino(rhbTemp){
    try{
      const connection = await dbConnection();
      const query = `
      INSERT GadoSeguro.Racas_has_Bovino (Racas_id, Bovino_idBovino)
      VALUES (?,?)
      `;
      const values = [
        rhbTemp.Racas_id,
        rhbTemp.Bovino_idBovino
      ];
      await connection.execute(query, values);
    } catch (error){
      console.error("Falha ao adicionar rhb", error);
    }
  }

  async getAllRacaBovino(){
    try{
      const connection = await dbConnection();
      const [rhbs] = await connection.execute('SELECT * FROM GadoSeguro.Racas_has_Bovino;');
      return rhbs
    } catch (error){
      console.error("Falha ao adicionar rhb", error);
    }
  }

  async getAllRacaIdBovino(idBovino){
    try{
      const connection = await dbConnection();
      const [rhbs] = await connection.execute('SELECT * FROM GadoSeguro.Racas_has_Bovino WHERE Bovino_idBovino=?;', idBovino);
      return rhbs
    } catch (error){
      console.error("Falha ao adicionar rhb", error);
    }
  }

  async getAllIdRacaBovino(idRaca){
    try{
      const connection = await dbConnection();
      const [rhbs] = await connection.execute('SELECT * FROM GadoSeguro.Racas_has_Bovino WHERE Racas_id;',idRaca);
      return rhbs
    } catch (error){
      console.error("Falha ao adicionar rhb", error);
    }
  }

  async  deleteRHB(idRaca, idBovino) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Racas_has_Bovino WHERE Bovino_idBovino=? AND Racas_id;', [idBovino, idRaca]);
    } catch (error) {
      console.error("Erro ao deletar o objeto fazendaDose:", error);
    }
  }

  async  deleteRHBRacas(idRaca) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Racas_has_Bovino WHERE Racas_id;', idRaca);
    } catch (error) {
      console.error("Erro ao deletar o objeto fazendaDose:", error);
    }
  }

  async  deleteRHBovinos(idBovino) {
    try {
      const connection = await dbConnection();
      await connection.query('DELETE FROM GadoSeguro.Racas_has_Bovino WHERE Bovino_idBovino=?;', idBovino);
    } catch (error) {
      console.error("Erro ao deletar o objeto fazendaDose:", error);
    }
  }

}

module.exports = new rhbServices()