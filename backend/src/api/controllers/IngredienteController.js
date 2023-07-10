const IngredienteService = require('../../services/ingredienteService')

class IngredienteController {

    //adicionar dose 
    create_ingrediente(request, response) {
        const ingredienteTemp = {
            nome: request.body.nome,
            qnt_estoque: request.body.qnt_estoque,
            unidade: request.body.unidade
        }

        try {
            IngredienteService.addIngrediente(ingredienteTemp);
            response.status(200).json({
                msg: "Ingredientes cadastrado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Ingredientess
    async show_ingredientes(request, response) {
        try {
            const ingrediente = await IngredienteService.getAllIngrediente()
            return response.status(200).json(ingrediente)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma Ingredientes pelo ID 
    async show_ingredienteId(request, response) {
        const { id } = request.params
        try {
            const ingrediente = await IngredienteService.getAllIngredienteId(id)
            return response.status(200).json(ingrediente)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma Ingredientes pelo ID 
    async update_ingrediente(request, response) {
        const ingredienteTemp = {
            nome: request.body.nome,
            qnt_estoque: request.body.qnt_estoque,
            unidade: request.body.unidade
        }

        try {
            IngredienteService.getUpdateIngrediente(ingredienteTemp);
            response.status(200).json({
                msg: "Ingredientes atualizado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Deletar Ingredientes pelo ID
    async delete_ingrediente(request, response) {
        try {
            const { idIngredientes } = request.params.idIngredientes
            IngredienteService.deleteIngrediente(idIngredientes);
            response.status(200).json({
                msg: "Ingredientes deletado com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }


}

module.exports = new IngredienteController()
