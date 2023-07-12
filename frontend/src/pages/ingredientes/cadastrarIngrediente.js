import React, { useState } from 'react';
import gadoSeguro from '../../services/connectionGadoSeguro';
import { useNavigate } from 'react-router-dom';

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
            qnt_estoque: qtdEstoqueForm,
            unidade: unidadeForm
        };

        try {
            const { data } = await gadoSeguro.post('/ingrediente', payload);
            console.log("Cadastro realizado com sucesso!")
            navigate('/ingredientes');

        } catch (error) {
            console.log("Cadastro falhou!", error)
        }

    };

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
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
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }} onSubmit={e => navigate('/inicio/inicio')}>
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