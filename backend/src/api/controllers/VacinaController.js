const VacinaService = require('../../services/vacinaServices')

class VacinaController {

    //adicionar vacina
    create_vacina(request, response) {
        const vacinaTemp = {
            nome_vacina: request.body.nome_vacina,
            info: request.body.info,
            fabricante: request.body.fabricante
        }

        try {
            VacinaService.addVacina(vacinaTemp);
            response.status(200).json({
                msg: "Vacina cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as vacinas
    async show_vacinas(request, response) {
        try {
            const vacinas = await VacinaService.getAllVacinas()
            return response.status(200).json(vacinas)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma vacina pelo nome 
    async show_vacinaNome(request, response) {
        const { id } = request.params
        try {
            const bovino = await BovinoService.getVacinaNome(id)
            return response.status(200).json(bovino)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma vacina
    async update_vacina(request, response) {
        const vacinaTemp = {
            nome_vacina: request.body.nome_vacina,
            info: request.body.info,
            fabricante: request.body.fabricante
        }

        try {
            VacinaService.updateVacina(vacinaTemp);
            response.status(200).json({
                msg: "Vacina atualizada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Deletar vacina pelo ID
    async delete_vacina(request, response) {
        try {
            const { idVacina } = request.params.idBovino
            VacinaService.deleteVacina(idVacina);
            response.status(200).json({
                msg: "Vacina deletado com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar a vacina")
            return response.status(400).json({
                error: error
            })
        }
    }

}


module.exports = new VacinaController()