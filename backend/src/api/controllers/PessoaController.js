/*const pessoaService = require('../../services/pessoaService');

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

    async login(request, response) {
        const { email, password } = request.body;
        var credentialStatus = await pessoaService.validateCredentials(email, password);

        if (credentialStatus.status) {
            const token = await pessoaService.generateSignInToken(email, credentialStatus.role);
            response.header('Authorization', token);
            return response.status(200).json({
                msg: credentialStatus.msg,
                role: credentialStatus.role,
                id: credentialStatus.id,
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
*/