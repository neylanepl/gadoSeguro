import React, { useState } from 'react';

import '../../styles/css/cadastrarPessoa.css';
import Menu from '../../components/menu';

const EditarFazenda = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [sitioForm, setSitioForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [cepForm, setCepForm] = useState('');
    const [complementoForm, setComplementoForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastro Usuário </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeFazenda" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Sitio</p></div>
                        <input type="text" className="sitioFazenda" onChange={e => setSitioForm(e.target.value)} />

                        <div className="id_"><p>Cidade</p></div>
                        <input type="text" className="cidadeFazenda" onChange={e => setCidadeForm(e.target.value)} />

                        <div className="id_"><p>Cep</p></div>
                        <input type="text" className="cepFazenda" disabled onChange={e => setCepForm(e.target.value)} />

                        <div className="id_"><p>Complemento</p></div>
                        <input type="text" className="complementoFazenda" onChange={e => setComplementoForm(e.target.value)} />

                        <div className="id_"><p>Numero</p></div>
                        <input type="text" className="numeroFazenda" disabled onChange={e => setNumeroForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarFazenda;