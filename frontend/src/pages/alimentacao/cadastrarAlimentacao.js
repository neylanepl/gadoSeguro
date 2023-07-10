import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import '../../styles/css/alimentacaoBovino.css';
import '../../styles/css/global.css';
import Menu from '../../components/menu';

const CadastrarAlimentacao = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [faltaConsumirForm, setFaltaConsumirForm] = useState('');
    const [qntDiariaRecomendadaForm, setQntDiariaRecomendadaForm] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Recupera os dados do armazenamento local
        const dadosIngredientes = localStorage.getItem('dadosIngredientes');
        if (dadosIngredientes) {
            const ingredientesSalvos = JSON.parse(dadosIngredientes);
            setIngredientes(ingredientesSalvos);
        }
    }, []);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            faltaConsumir: faltaConsumirForm,
            qntDiariaRecomendada: qntDiariaRecomendadaForm,
            ingredientesSelecionados: ingredientesSelecionados
        };
        salvarAlimentacao(payload);

        navigate('/', { state: { alimentacao: payload } });
    };

    const handleSelecionarIngrediente = (ingrediente) => {
        if (ingredientesSelecionados.includes(ingrediente)) {
            setIngredientesSelecionados(ingredientesSelecionados.filter(item => item !== ingrediente));
        } else {
            setIngredientesSelecionados([...ingredientesSelecionados, ingrediente]);
        }
    };


    const salvarAlimentacao = (dados) => {
        // Obtém os dados existentes do armazenamento local (se houver)
        const dadosExistentes = localStorage.getItem('dadosAlimentacao');

        let novosDadosAlimentacao = [];

        if (dadosExistentes) {
            // Se já houver dados salvos, converte para um array
            novosDadosAlimentacao = JSON.parse(dadosExistentes);
        }

        // Adiciona os novos dados ao array
        novosDadosAlimentacao.push(dados);

        // Salva o array atualizado no armazenamento local
        localStorage.setItem('dadosAlimentacao', JSON.stringify(novosDadosAlimentacao));

        // Limpa os campos do formulário
        setNomeForm('');
        setFaltaConsumirForm('');
        setQntDiariaRecomendadaForm('');

        // Exibe os dados salvos no console
        console.log('Dados salvos Alimentacao:', novosDadosAlimentacao);

        // Navega para a página desejada após cadastrar os dados
        navigate('/');
    };


    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Alimentação </h1>
            <div className="formularioAlimentacao" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={handleSubmitForm}>
                    <div className="sub-div">
                        <div className="id_">
                            <p>Nome</p>
                        </div>
                        <input
                            type="text"
                            className="nomeAlimentacao"
                            required
                            value={nomeForm}
                            onChange={e => setNomeForm(e.target.value)}
                        />

                        <div className="id_">
                            <p>Falta consumir</p>
                        </div>
                        <input
                            type="text"
                            className="faltaConsumirAlimentacao"
                            required
                            value={faltaConsumirForm}
                            onChange={e => setFaltaConsumirForm(e.target.value)}
                        />

                        <div className="id_">
                            <p>Quantidade diária recomendada</p>
                        </div>
                        <input
                            type="text"
                            className="qntDiariaRecomendadaAlimentacao"
                            required
                            value={qntDiariaRecomendadaForm}
                            onChange={e => setQntDiariaRecomendadaForm(e.target.value)}
                        />

                        <div className="id_">
                            <p>Ingredientes</p>
                        </div>
                        <div className='checkboxContainer'>
                            {ingredientes.map(ingrediente => (
                                <div key={ingrediente.nome} className='checkboxItem'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={ingrediente.nome}
                                            checked={ingredientesSelecionados.includes(ingrediente.nome)}
                                            onChange={() => handleSelecionarIngrediente(ingrediente.nome)}
                                        />
                                        {ingrediente.nome}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button
                                variant="warning"
                                type="submit"
                                value="submit"
                                className="btn btn-success"
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0", padding: 4, borderRadius: "5px" }}
                            >
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarAlimentacao;
