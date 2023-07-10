const dbConnection = require("../database/Conect");

class PessoaService {
  //Adicionar Pessoa
  async addPessoa(pessoaTemp) {
    try {
      const connection = await dbConnection();
      const query = `INSERT INTO GadoSeguro.Pessoa (cpf, nome, email, senha, cargo)
      VALUES (?,?,?,?,?)`;
      const values = [
        pessoaTemp.cpf,
        pessoaTemp.nome,
        pessoaTemp.email,
        pessoaTemp.senha,
        pessoaTemp.cargo
      ];
      await connection.execute(query, values);
      console.log("Pessoa Adicionado");
    } catch (error) {
      console.log("Erro ao adicionar pessoa:", error);
    }
  }

  //Pegar a lista de Pessoas 
  async getAllPessoa() {
    try {
      const connection = await dbConnection();
      const [pessoas] = await connection.query(`SELECT * FROM  GadoSeguro.Pessoa;`);
      return pessoas;
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

   //Pegar Pessoas pelo cpf
   async getPessoaCPF(cpf) {
    try {
      const connection = await dbConnection();
      const [pessoas] = await connection.query(`SELECT * FROM  GadoSeguro.Pessoa WHERE cpf=?;`,cpf);
      return pessoas;
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

  //Achar Pessoa pelo ID
  async getPessoaCargo(cpf) {
    try {
      const connection = await dbConnection();
      const [pessoas] = await connection.query(`SELECT email, cargo FROM  GadoSeguro.Pessoa WHERE cpf=?;`, cpf);
      if (pessoas.length > 0) {
        return pessoas;
      }
      console.log("Lista de pessoas");
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

  //Retornar CPF, email, senha e cargo
  async getInfoPessoa(cpf) {
    try {
      const connection = await dbConnection();
      const [pessoas] = await connection.query(`SELECT cpf, email, cargo, senha FROM  GadoSeguro.Pessoa WHERE cpf=?;`, cpf);
      if (pessoas.length > 0) {
        return pessoas;
      }
      console.log("Lista de pessoas");
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

  //Atualizar Pessoa
  async updatePessoa(cpf, pessoaTemp) {
    try {
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Pessoa SET Fazenda_idFazenda=?, nome=?, email=?, senha=?, cargo=? WHERE cpf=?`;
      const values = [
        pessoaTemp.nome,
        pessoaTemp.email,
        pessoaTemp.senha,
        pessoaTemp.cargo,
        cpf
      ];
      await connection.execute(query, values);
      console.log("Pessoa Atualizado");
    } catch (error) {
      console.log("Erro ao atualizar pessoa:", error);
    }
  }

  //Deletar Pessoa
  async deletePessoa(cpf) {
    try {
      const connection = await dbConnection();
      await connection.query(`DELETE FROM GadoSeguro.Pessoa WHERE cpf=?`,cpf);
      console.log("Pessoa Deletado");
    } catch (error) {
      console.log("Erro ao Deletar pessoa:", error);
    }
  }
}

module.exports = new PessoaService();