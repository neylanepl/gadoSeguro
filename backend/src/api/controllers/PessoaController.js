const pessoaService = require('../../services/pessoaService');

class PessoaController {

    async create_pessoa(request, response) {
        const PessoaTemp = {
            cpf: request.body.cpf,
            nome: request.body.nome,
            email: request.body.email,
            cargo: request.body.cargo,
            senha: request.body.senha,
        };

        try {
            pessoaService.addPessoa(PessoaTemp);
            response.status(200).json({
                msg: "Pessoa cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    async update_pessoa(request, response) {
        
        const pessoaTemp = {
            ...request.body
        }
        const  cpf  = pessoaTemp.cpf;
        try {
            pessoaService.updatePessoa(cpf, pessoaTemp)
            response.status(200).json({
                msg: "Pessoa atualizada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    async show_pessoas(request, response) {
        try {
            const pessoas = await pessoaService.getAllPessoa()
            return response.status(200).json(pessoas)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    async delete_pessoa(request, response) {
        try {
            const cpf = request.params.cpf
            pessoaService.deletePessoa(cpf);
            response.status(200).json({
                msg: "Pessoa deletada com sucesso"
            })
        } catch (error) {
            console.log("Não foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }

    async login(request, response) {
        const { email, senha } = request.body;
        var credentialStatus = await pessoaService.validateCredentials(email, senha);
        if (credentialStatus.status) {
            const token = await pessoaService.generateSignInToken(email, credentialStatus.role);
            response.header('Authorization', token);
            return response.status(200).json({
                msg: credentialStatus.msg,
                role: credentialStatus.role,
                token: token
            });
        } else {
            return response.status(401).json({
                err: credentialStatus.err
            });
        }
    }

    

}

module.exports = new PessoaController()
