const boiService = require('../../services/boiServices');

class BoiController {

    async create_boi(request, response) {
        console.log("controle boi");
        const boiTemp = {
            Bovino_idBovino: request.body.idBovino
        };

        try {
            boiService.addBoi(boiTemp);
            response.status(200).json({
                msg: "boi cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }
}

module.exports = new BoiController()