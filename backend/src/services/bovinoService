const dbConnection = require("../database/Conect");
const Bovino = require("../entity/Bovino");

class BovinoService {
  //Adicionar Bovino
  async addBovino(bovinoTemp){
    try{
      const connection = await dbConnection();
      const query = `INSERT INTO GadoSeguro.Bovino (idBovino, Fazenda_idFazenda, Vaca_idVaca, reprodutor, sexo, data_nascimento, chifre, nome, peso, cor)
      VALUES (?,?,?,?,?,?,?,?,?,?)`;
      const values = [
        bovinoTemp.getId(),
        bovinoTemp.getFazendaIdFazenda(),
        bovinoTemp.getVacaIdVaca(),
        bovinoTemp.getReprodutor(),
        bovinoTemp.getSexo(),
        bovinoTemp.getDataNascimento(),
        bovinoTemp.getChifre(),
        bovinoTemp.getNome(),
        bovinoTemp.getPeso(),
        bovinoTemp.getCor()
      ];
      await connection.execute(query, values);
      console.log("Bovino Adicionado");    
    } catch(error){
      console.log("Erro ao adicionar bovino:", error);
    }
  } 

  //Pegar a lista de Bovinos de uma fazenda
  async getAllBovino(idFazenda){
    try{
      const connection = await dbConnection();
      const [bovinos] =  await connection.query(`SELECT * FROM  GadoSeguro.Bovino WHERE Fazenda_idFazenda=?;`, idFazenda);
      if(bovinos.length > 0){
        console.log(bovinos);
        return bovinos;
      }
      console.log("Lista de bovinos");    
    } catch(error){
      console.log("Erro a resgatar a lista bovino:", error);
    }
  }

  //Achar Bovino pelo ID
  async findBovinoId(idBovino){
    try{
      const connection = await dbConnection();
      const [bovinos] =  await connection.query(`SELECT * FROM  GadoSeguro.Bovino WHERE idBovino=?;`, idBovino);
      if(bovinos.length > 0){
        console.log(bovinos);
        return bovinos;
      }
      console.log("Lista de bovinos");    
    } catch(error){
      console.log("Erro a resgatar a lista bovino:", error);
    }
  }

  //Atualizar Bovino
  async updateBovino(idBovino, bovinoTemp){
    try{
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Bovino SET Fazenda_idFazenda=?, Vaca_idVaca=?, reprodutor=?, sexo=?, data_nascimento=?, chifre=?, nome=?, peso=?, cor=? WHERE idBovino=?`;
      const values = [
        bovinoTemp.getFazendaIdFazenda(),
        bovinoTemp.getVacaIdVaca(),
        bovinoTemp.getReprodutor(),
        bovinoTemp.getSexo(),
        bovinoTemp.getDataNascimento(),
        bovinoTemp.getChifre(),
        bovinoTemp.getNome(),
        bovinoTemp.getPeso(),
        bovinoTemp.getCor(),
        idBovino
      ];
      await connection.execute(query, values);
      console.log("Bovino Atualizado");    
    } catch(error){
      console.log("Erro ao atualizar bovino:", error);
    }
  } 

  //Deletar Bovino
  async updateBovino(idBovino){
    try{
      const connection = await dbConnection();
      await connection.query(`DELETE FROM GadoSeguro.Bovino WHERE idBovino=?`);
      console.log("Bovino Deletado");    
    } catch(error){
      console.log("Erro ao Deletar bovino:", error);
    }
  } 
}

module.exports = new BovinoService();