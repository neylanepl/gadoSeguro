import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/global.css';
import Menu from '../../components/menu';

const CadastrarAlimentacao = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [faltaConsumirForm, setFaltaConsumirForm] = useState('');
    const [qntDiariaRecomendadaForm, setQntDiariaRecomendadaForm] = useState('');
    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            faltaConsumir: faltaConsumirForm,
            qntDiariaRecomendada: qntDiariaRecomendadaForm
        };

        navigate('/', { state: { alimentacao: payload } });
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
                        {/**  ACRESCENTAR OS INGREDIENTES
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
                        </div> */}

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
