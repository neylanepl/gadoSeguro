const dbConnection = require("../database/Conect");
const encrypt = require("../utils/encrypt");
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
class PessoaService {
  //Adicionar Pessoa
  async addPessoa(pessoaTemp) {
    try {
      const connection = await dbConnection();
      
      const senhaEncrypt = await encrypt.hashingPassword(pessoaTemp.senha);
      console.log("Senha A Encrip: ", senhaEncrypt);
      const query = `INSERT INTO GadoSeguro.Pessoa (cpf, nome, email, senha, cargo)
      VALUES (?,?,?,?,?)`;
      const values = [
        pessoaTemp.cpf,
        pessoaTemp.nome,
        pessoaTemp.email,
        senhaEncrypt,
        pessoaTemp.cargo
      ];
      console.log(query, values);
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

  //Retornar Pessoa por Email
  async getAcess(email, senha) {
    try {
      const connection = await dbConnection();
      const query = `SELECT * FROM  GadoSeguro.Pessoa WHERE email=?;`;
      const values = [email];
      const [pessoas] = await connection.execute(query, values);
      if(pessoas.length > 0){
        console.log("Lista de pessoas: ",pessoas[0]);
        const pessoa = pessoas[0];
        console.log("Objeto Pessoa: ",pessoa);
        const acesso = await encrypt.comparePassword(senha, pessoa.senha);
        console.log("Resultado: ", acesso);

        if(acesso){
          return pessoa;
        }
      }
      console.log("Lista de pessoas");
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

   //Retornar Pessoa por Email
   async validateCredentials(email, senha) {
    try {
      const connection = await dbConnection();
      var credentialsStatus = { status: false, err: 'Não validado...' };
      const query = `SELECT * FROM  GadoSeguro.Pessoa WHERE email=?;`;
      const values = [email];
      const [pessoas] = await connection.execute(query, values);
      if(pessoas.length > 0){
        const pessoa = pessoas[0];
        const acesso = await encrypt.comparePassword(senha, pessoa.senha);

        if(acesso){
          credentialsStatus = { status: true, msg: 'Credenciais válidas!', role: pessoa.cargo};
        }
      }
      return credentialsStatus;
    } catch (error) {
      console.log("Erro a resgatar a lista pessoa:", error);
    }
  }

  async generateSignInToken(emailReceived, roleReceived) {
    const token = jwt.sign({
        email: emailReceived,
        role: roleReceived
    }, secret, { expiresIn: "2 days" });
    return token;
  }


  //Atualizar Pessoa
  async updatePessoa(cpf, pessoaTemp) {
    try {
      const connection = await dbConnection();
      const query = `UPDATE GadoSeguro.Pessoa SET nome=?, email=?, cargo=? WHERE cpf=?`;
      const values = [
        pessoaTemp.nome,
        pessoaTemp.email,
        pessoaTemp.cargo,
        cpf
      ];
      await connection.execute(query, values);
      console.log("Pessoa Atualizado");
    } catch (error) {
      console.log("Erro ao atualizar pessoa:", error);
    }
  }

  //Alterar Senha
  async changePassword(newPassword, cpf) {
    //const senhaEncrypt = await encrypt.hashingPassword(newPassword);
    try {
        const connection = await dbConnection();
        const updateQuery = 'UPDATE GadoSeguro.Pessoa SET senha=? WHERE cpf=?;';
        const values = [newPassword, cpf];
        await connection.query(updateQuery, values);
        console.log("Senha Alterada");
    } catch (error) {
        console.log(error);
        return error;
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