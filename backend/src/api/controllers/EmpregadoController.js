const empregadosService = require('../../services/empregadosService');
const EmpregadoService = require('../../services/empregadosService')

class VacaController {
    //adicionar vaca 
    create_empregado(request, response) {
        const empregadoTemp = {
            Pessoa_cpf: request.body.Pessoa_cpf,
            Fazenda_idfazenda: request.body.Fazenda_idfazenda
        }

        try {
            EmpregadoService.addEmpregado(empregadoTemp);
            response.status(200).json({
                msg: "Empregado cadastrado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Vacass de uma vacina
    async show_empregados(request, response) {
        try {
            const empregado = await empregadosService.getAllEmpregado()
            return response.status(200).json(empregado)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar empregado com ym cpf
    async show_empregado(request, response) {
      const { cpf } = request.params
      try {
          const empregado = await empregadosService.getEmpregadoCPF(cpf)
          return response.status(200).json(empregado)
      } catch (err) {
          return response.status(400).json({
              error: err
          })
      }
  }

  
    //Deletar Vacas pelo ID
    async delete_empregado(request, response) {
        try {
            const { cpf } = request.params.cpf
            EmpregadoService.deleteEmpregado(cpf)
            response.status(200).json({
                msg: "Empregado deletado com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }


}

module.exports = new VacaController()