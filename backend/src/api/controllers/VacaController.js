const VacaService = require('../../services/vacaService')

class VacaController {
    //adicionar vaca 
    async create_vaca(request, response) {
        const vacaTemp = {
            idVaca: request.body.idBovino,
            dar_leite: request.body.producaoLeite,
            gravida: request.body.gravida,
            producao_leite: request.body.dandoLeite
        };

        try {
            VacaService.addVaca(vacaTemp);
            response.status(200).json({
                msg: "Vacas cadastrado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Vacass de uma vacina
    async show_vacas(request, response) {
        try {
            const vaca = await VacaService.getAllVacas()
            return response.status(200).json(vaca)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma Vacas pelo ID 
    async show_vacaId(request, response) {
        const { id } = request.params
        try {
            const vacas = await VacaService.getVacaId(id)
            return response.status(200).json(vacas)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma Vacas pelo ID 
    async update_vaca(request, response) {
        const vacaTemp = {
            idVaca: request.body.idVaca,
            dar_leite: request.body.dar_leite,
            gravida: request.body.gravida,
            producao_leite: request.body.gravida
        }

        try {
            VacaService.updateVaca(vacaTemp);
            response.status(200).json({
                msg: "Vacas atualizado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Deletar Vacas pelo ID
    async delete_vaca(request, response) {
        try {
            const { idVaca } = request.params.idVacas
            VacaService.deleteVaca(idVaca);
            response.status(200).json({
                msg: "Vacas deletado com sucesso"
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