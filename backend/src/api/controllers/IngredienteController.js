const ingredienteService = require('../../services/ingredienteService')

class IngredienteController {

    //adicionar dose 
    async create_ingrediente(request, response) {
        const ingredienteTemp = {
            nome: request.body.nome,
            qnt_estoque: request.body.qnt_estoque,
            unidade: request.body.unidade
        };

        try {
            ingredienteService.addIngrediente(ingredienteTemp);
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
            console.log("eita controller");
            const ingrediente = await ingredienteService.getAllIngrediente()
            console.log("ingrediente: " + ingrediente);
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
            const ingrediente = await ingredienteService.getAllIngredienteId(id)
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
            ingredienteService.getUpdateIngrediente(ingredienteTemp);
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
            ingredienteService.deleteIngrediente(idIngredientes);
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
