import React, { useState } from 'react';
import gadoSeguro from '../../services/connectionGadoSeguro';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/menu';


const CadastrarFazenda = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [sitioForm, setSitioForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [cepForm, setCepForm] = useState('');
    const [complementoForm, setComplementoForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            sitio: sitioForm,
            cidade: cidadeForm,
            cep: cepForm,
            complemento: complementoForm,
            numero: numeroForm
        };

        try {
            const { data } = await gadoSeguro.post('/fazenda', payload);
            console.log("Cadastro realizado com sucesso!")
            navigate('/fazendas/fazendaHome');

        } catch (error) {
            console.log("Cadastro falhou!", error)
        }
    };

    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Fazenda </h1>
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
                            <button variant="warning" type="submit" value="submit" className="botaoCadastrar btn btn-success"
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

export default CadastrarFazenda;

