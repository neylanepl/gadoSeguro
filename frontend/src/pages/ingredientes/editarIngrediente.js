import React, { useState } from 'react';
import '../../styles/css/global.css';
import '../../styles/css/alimentacaoBovino.css';
import Menu from '../../components/menu';

const EditarIngrediente = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [qtdEstoqueForm, setEmailForm] = useState('');
    const [unidadeForm, setCargoForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Ingrediente </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeIngrediente" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Quantidade Estoque</p></div>
                        <input type="text" className="qtdEstoqueIngrediente" onChange={e => setEmailForm(e.target.value)} />

                        <div className="id_"><p>Unidade</p></div>
                        <input type="text" className="unidadeIngrediente" onChange={e => setCargoForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarIngrediente;