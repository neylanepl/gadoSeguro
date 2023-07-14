const dbConnection = require("../database/Conect");

class DoseService{

  formateDate(dataAjeitar){
    console.log(dataAjeitar)
    if(dataAjeitar!='' &&  dataAjeitar!=null){
      let arrData = dataAjeitar.split('-');
      console.log(arrData[2] +"|"+ arrData[1] +"|"+ arrData[0])
      let dataAjeitada = new Date(arrData[0], arrData[1] - 1, arrData[2])
      console.log(dataAjeitada)
      return dataAjeitada;
  }
  return null;
  }

  //Adicionar Dose
async  addDose(doseTemp) {
  doseTemp.data_aplicada = this.formateDate(doseTemp.data_aplicada)
  doseTemp.data_prev =this.formateDate(doseTemp.data_prev)

  try {
    console.log("Dentro do ADDDOSE: ",doseTemp);
    const connection = await dbConnection();
    const query = `
    INSERT INTO GadoSeguro.Dose (nome_vacina, lote, info, data_aplicada, data_prev) 
    VALUES (?,?,?,?,?)
    `;
    const values = [
      doseTemp.nome_vacina,
      doseTemp.lote,
      doseTemp.info,
      doseTemp.data_aplicada,
      doseTemp.data_prev
    ];
    console.log("Objeto: ", doseTemp)
    console.log(query, values)
    await connection.execute(query, values);
    console.log("Objeto Dose adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o objeto Dose:", error);
  }
}

//Retornar todas as Doses de uma vacina
async getAll() {
  try {
      const connection = await dbConnection()
      const [doses] = await connection.query('SELECT * FROM Dose')
      return doses
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar uma Dose pelo ID 
async getAllDoseId(idDose) {
  try {
      const connection = await dbConnection()
      const [doses] = await connection.query('SELECT * FROM Dose WHERE idDose=?;', idDose)
      return doses
  } catch (error) {
      console.log(error);
      return error
  }
}

//Retornar as doses de uma vacina
async getAllDosesFromVacina(nome_vacina) {
  console.log("Atras das dose de ", nome_vacina)
  try {
      const connection = await dbConnection()
      const [doses] = await connection.query('SELECT * FROM Dose WHERE nome_vacina=?;', nome_vacina)
      console.log(doses[0])
      return doses
  } catch (error) {
      console.log(error);
      return error
  }
}

//Atualiza uma Dose pelo ID 
async getUpdateDose(idDose, doseTemp) {
  console.log("Vindo:",doseTemp)
  try {
    const connection = await dbConnection();
    const query = `
    UPDATE GadoSeguro.Dose SET nome_vacina=?, lote=?, info=?, data_aplicada=?, data_prev=? 
    WHERE idDose=?
    `;
    const values = [
      doseTemp.nome_vacina,
      doseTemp.lote,
      doseTemp.info,
      doseTemp.data_aplicada,
      doseTemp.data_prev,
      idDose
    ];
    console.log("Tentado", values)
    await connection.execute(query, values);
    Console.log("Dose Atualizada");
  } catch (error) {
      console.log("Problema em atualizar a dose",error);
      return error
  }
}

//Deletar Dose pelo ID
async  deleteDose(idDose) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Dose WHERE idDose=?;', idDose);
  } catch (error) {
    console.error("Erro ao deletar o objeto fazendaDose:", error);
  }
}
}

module.exports = new DoseService();