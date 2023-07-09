import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/alimentacaoBovino.css';
import Menu from '../../components/menu';

const CadastrarIngrediente = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [qtdEstoqueForm, setQtdEstoqueForm] = useState('');
    const [unidadeForm, setUnidadeForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            qtdEstoque: qtdEstoqueForm,
            unidade: unidadeForm
        };

        // Função para salvar os dados no armazenamento local
        salvarDados(payload);
    };

    const salvarDados = (dados) => {
        // Obtém os dados existentes do armazenamento local (se houver)
        const dadosExistentes = localStorage.getItem('dadosIngredientes');

        let novosDados = [];

        if (dadosExistentes) {
            // Se já houver dados salvos, converte para um array
            novosDados = JSON.parse(dadosExistentes);
        }

        // Adiciona os novos dados ao array
        novosDados.push(dados);

        // Salva o array atualizado no armazenamento local
        localStorage.setItem('dadosIngredientes', JSON.stringify(novosDados));

        // Limpa os campos do formulário
        setNomeForm('');
        setQtdEstoqueForm('');
        setUnidadeForm('');

        // Exibe os dados salvos no console
        console.log('Dados salvos:', novosDados);

        // Navega para a página desejada após cadastrar os dados
        navigate('/');
    };


    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Ingrediente </h1>
            <div className="formularioIngrediente" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeIngrediente" required onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Quantidade Estoque</p></div>
                        <input type="text" className="qtdEstoqueIngrediente" required onChange={e => setQtdEstoqueForm(e.target.value)} />

                        <div className="id_"><p>Unidade</p></div>
                        <input type="text" className="unidadeIngrediente" required onChange={e => setUnidadeForm(e.target.value)} />

                        <div>
                            <button variant="warning" type="submit" value="submit" className="btn btn-success"
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

};

export default CadastrarIngrediente;