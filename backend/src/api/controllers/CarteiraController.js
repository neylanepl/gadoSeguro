const CarteiraService = require('../../services/carteiraVacServices')

class CarteiraController {

    //adicionar carteira
    create_carteira(request, response) {
        const carteiraTemp = {
            Carteira_idCarteira: request.body.Carteira_idCarteira
        }

        try {
            CarteiraService.addCarteiraVac(carteiraTemp);
            response.status(200).json({
                msg: "Carteira cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Carteiras de uma vacina
    async show_carteiras(request, response) {
        try {
            const carteiras = await CarteiraService.getAllCarteiras()
            return response.status(200).json(carteiras)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma Carteira pelo ID 
    async show_carteiraId(request, response) {
        const { id } = request.params
        try {
            const carteira = await CarteiraService.getCarteiraVacId(id)
            return response.status(200).json(carteira)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Deletar Carteira pelo ID
    async delete_carteira(request, response) {
        try {
            const { id } = request.params.id
            CarteiraService.deleteCarteira(id);
            response.status(200).json({
                msg: "Carteira deletado com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }


}

module.exports = new CarteiraController()