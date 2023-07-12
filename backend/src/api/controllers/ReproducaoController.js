const reproducaoService = require('../../services/reproducaoService');

class ReproducaoController {

    async create_reproducao(request, response) {
        console.log("controle reproducao");
        const reproducaoTemp = {
            Boi_Bovino_idBovino: request.body.idBovino,
            Vaca_idVaca: request.body.idVaca,
            data_inicio: request.body.dataInicio
        };

        try {
            reproducaoService.addReproducao(reproducaoTemp);
            response.status(200).json({
                msg: "reproducao cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }
}

module.exports = new ReproducaoController()