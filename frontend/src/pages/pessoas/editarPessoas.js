import React, { useState } from 'react';

import '../../styles/css/cadastrarPessoa.css';
import Menu from '../../components/menu';

const EditarPessoa = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [cargoForm, setCargoForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Usuário </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomePessoa" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Email</p></div>
                        <input type="text" className="emailPessoa" onChange={e => setEmailForm(e.target.value)} />

                        <div className="id_"><p>Cargo</p></div>
                        <input type="text" className="cargoPessoa" onChange={e => setCargoForm(e.target.value)} />

                        <div className="id_"><p>Senha</p></div>
                        <input type="text" className="senhaPessoa" disabled onChange={e => setSenhaForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarPessoa;