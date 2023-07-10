const fazendaService = require('../../services/fazendaService');

class FazendaController {

    async create_fazenda(request, response) {
        const fazendaTemp = {
            nome: request.body.nome,
            sitio: request.body.sitio,
            cidade: request.body.cidade,
            cep: request.body.cep,
            complemento: request.body.complemento,
            numero: request.body.numero
        };

        try {
            fazendaService.addFazenda(fazendaTemp);
            response.status(200).json({
                msg: "Fazenda cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    async show_fazendas(request, response) {
        try {
            const fazendas = await fazendaService.getAllFazendas()
            return response.status(200).json(fazendas)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    async show_fazendaId(request, response) {
        const { id } = request.params
        try {
            const fazenda = await fazendaService.findFazendaId(id)
            return response.status(200).json(fazenda)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma Fazenda pelo ID 
    async update_fazenda(request, response) {
        const fazendaTemp = {
            nome: request.body.nome,
            sitio: request.body.sitio,
            cidade: request.body.cidade,
            cep: request.body.cep,
            complemento: request.body.complemento,
            numero: request.body.numero
        }

        try {
            fazendaService.updateFazenda(fazendaTemp)
            response.status(200).json({
                msg: "Fazenda atualizada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }


    async delete_fazenda(request, response) {
        try {
            const { idFazenda } = request.params.idFazenda
            fazendaService.deleteFazenda(idFazenda);
            response.status(200).json({
                msg: "Fazenda deletada com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }

}

module.exports = new FazendaController()