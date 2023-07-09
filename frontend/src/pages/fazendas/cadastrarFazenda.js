import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarPessoa.css';
import Menu from '../../components/menu';


const CadastrarFazenda = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [sitioForm, setSitioForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [cepForm, setCepForm] = useState('');
    const [complementoForm, setComplementoForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            sitio: sitioForm,
            cidade: cidadeForm,
            cep: cepForm,
            complemento: complementoForm,
            numero: numeroForm
        };
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar fazenda </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeFazenda" required onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Sitio</p></div>
                        <input type="text" className="sitioFazenda" required onChange={e => setSitioForm(e.target.value)} />

                        <div className="id_"><p>Cidade</p></div>
                        <input type="text" className="cidadeFazenda" required onChange={e => setCidadeForm(e.target.value)} />

                        <div className="id_"><p>Cep</p></div>
                        <input type="text" className="cepFazenda" required onChange={e => setCepForm(e.target.value)} />

                        <div className="id_"><p>Complemento</p></div>
                        <input type="text" className="complementoFazenda" required onChange={e => setComplementoForm(e.target.value)} />

                        <div className="id_"><p>Numero</p></div>
                        <input type="text" className="numeroFazenda" required onChange={e => setNumeroForm(e.target.value)} />

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

export default CadastrarFazenda;

