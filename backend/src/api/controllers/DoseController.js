const DoseService = require('../../services/doseService')

class DoseController {

    //adicionar dose 
    create_dose(request, response) {
        const doseTemp = {
            nome: request.body.nome,
            lote: request.body.lote,
            info: request.body.info,
            dataAplicada: request.body.dataAplicada,
            dataPrev: request.body.dataAplicada
        }

        try {
            DoseService.addDose(doseTemp);
            response.status(200).json({
                msg: "Dose cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Doses de uma vacina
    async show_doses(request, response) {
        try {
            const doses = await DoseService.getAllDosesVac()
            return response.status(200).json(doses)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma Dose pelo ID 
    async show_dosesId(request, response) {
        const { id } = request.params
        try {
            const dose = await DoseService.getAllDosesId(id)
            return response.status(200).json(dose)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma Dose pelo ID 
    async update_dose(request, response) {
        const doseTemp = {
            nome: request.body.nome,
            lote: request.body.lote,
            info: request.body.info,
            dataAplicada: request.body.dataAplicada,
            dataPrev: request.body.dataAplicada
        }

        try {
            DoseService.getUpdateDose(doseTemp);
            response.status(200).json({
                msg: "Dose atualizada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Deletar Dose pelo ID
    async delete_dose(request, response) {
        try {
            const { idDose } = request.params.idDose
            DoseService.deleteDose(idDose);
            response.status(200).json({
                msg: "Dose deletada com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }


}

module.exports = new DoseController()