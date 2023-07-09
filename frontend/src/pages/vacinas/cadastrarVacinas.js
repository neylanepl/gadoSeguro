import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarVacinas.css';
import Menu from '../../components/menu';

const CadastrarVacina = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState(0);
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            informacoesExtras: informacoesExtrasForm,
            fabricante: fabricanteForm
        };

        // Função para salvar os dados no armazenamento local
        salvarDadosVacina(payload);

        // Aqui você pode adicionar sua lógica de envio de dados para a API
        // e manipular a resposta conforme necessário

        // Navegar para outra página após o envio do formulário
        navigate('/');
    };

    const salvarDadosVacina = (dados) => {
        // Obtém os dados existentes do armazenamento local (se houver)
        const dadosExistentesVacinas = localStorage.getItem('dadosVacinas');

        let novosDadosVacinas = [];

        if (dadosExistentesVacinas) {
            // Se já houver dados salvos, converte para um array
            novosDadosVacinas = JSON.parse(dadosExistentesVacinas);
        }

        // Adiciona os novos dados ao array
        novosDadosVacinas.push(dados);

        // Salva o array atualizado no armazenamento local
        localStorage.setItem('dadosVacinas', JSON.stringify(novosDadosVacinas));

        // Limpa os campos do formulário
        setNomeForm('');
        setFabricanteForm('');
        setFabricanteForm('');

        // Exibe os dados salvos no console
        console.log('Dados salvos:', novosDadosVacinas);

        // Navega para a página desejada após cadastrar os dados
        navigate('/');
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="nomeVacina" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="fabricanteVacina" onChange={e => setFabricanteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="informacaoVacina" onChange={e => setInformacoesExtrasForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarVacina;