import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/alimentacaoBovino.css';
import Menu from '../../components/menu';

const CadastrarAlimentacao = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [faltaConsumirForm, setFaltaConsumirForm] = useState('');
    const [qntDiariaRecomendadaForm, setQntDiariaRecomendadaForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            faltaConsumir: faltaConsumirForm,
            qntDiariaRecomendada: qntDiariaRecomendadaForm
        };
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> CADASTRAR ALIMENTAÇÃO </h1>
            <div className="formularioAlimentacao" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeAlimentacao" required onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Falta consumir</p></div>
                        <input type="text" className="faltaConsumirAlimentacao" required onChange={e => setFaltaConsumirForm(e.target.value)} />

                        <div className="id_"><p>Quantidade diária recomendada</p></div>
                        <input type="text" className="qntDiariaRecomendadaAlimentacao" required onChange={e => setQntDiariaRecomendadaForm(e.target.value)} />

                        <div>
                            <button variant="warning" type="submit" value="submit" className="btn btn-success"
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                                Cadastre-se
                            </button>
                            <button className="btn btn-success"
                                style={{ backgroundColor: "#6D3B00", borderColor: "#6D3B00", marginTop: "30px" }} variant="warning"
                                onClick={e => navigate('/login')}>
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

};

export default CadastrarAlimentacao;