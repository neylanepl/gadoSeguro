const FazendaService = require('../../services/fazendaService')

class FazendaController {

    async create_fazenda(request,response){
        const fazendaTemp = {
            nome: request.body.nome,
            sitio: request.body.sitio,
            cidade: request.body.cidade,
            cep: request.body.cep,
            complemento: request.body.complemento,
            numero: request.body.numero
        };

        try {
            FazendaService.addFazenda(fazendaTemp);
            response.status(200).json({
                msg: "Fazenda cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }


    async delete_fazenda(request,response){
        try {
            const {idFazenda} = request.params.idFazenda
            FazendaService.deleteFazenda(idFazenda);
            response.status(200).json({
                msg: "Fazenda deletada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }
}

module.exports = new FazendaController()