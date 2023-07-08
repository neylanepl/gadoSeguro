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
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> CADASTRO INGREDIENTE </h1>
            <div className="formularioIngrediente" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeIngrediente" required onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Quantidade Estoque</p></div>
                        <input type="email" className="qtdEstoqueIngrediente" required onChange={e => setQtdEstoqueForm(e.target.value)} />

                        <div className="id_"><p>Unidade</p></div>
                        <input type="text" className="unidadeIngrediente" required onChange={e => setUnidadeForm(e.target.value)} />

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

export default CadastrarIngrediente;