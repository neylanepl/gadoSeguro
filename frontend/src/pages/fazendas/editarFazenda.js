import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Menu from '../../components/menu';

const EditarFazenda = () => {
    const location = useLocation();
    const fazenda = location.state.fazenda;

    const [nomeForm, setNomeForm] = useState('');
    const [sitioForm, setSitioForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [cepForm, setCepForm] = useState('');
    const [complementoForm, setComplementoForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');

    useEffect(() => {
        setNomeForm(fazenda.nome);
        setSitioForm(fazenda.sitio);
        setCidadeForm(fazenda.cidade);
        setCepForm(fazenda.cep);
        setComplementoForm(fazenda.complemento);
        setNumeroForm(fazenda.numero);
    }, [fazenda]);

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

        try {
            // Faz a requisição para atualizar os dados da fazenda
            await axios.put(`/api/fazendas/${fazenda.id}`, payload);
            // Redireciona para outra página ou faz alguma ação de sucesso
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            // Lida com possíveis erros na requisição
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastro Usuário </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={handleSubmitForm}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeFazenda" value={nomeForm} onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Sitio</p></div>
                        <input type="text" className="sitioFazenda" value={sitioForm} onChange={e => setSitioForm(e.target.value)} />

                        <div className="id_"><p>Cidade</p></div>
                        <input type="text" className="cidadeFazenda" value={cidadeForm} onChange={e => setCidadeForm(e.target.value)} />

                        <div className="id_"><p>Cep</p></div>
                        <input type="text" className="cepFazenda" value={cepForm} onChange={e => setCepForm(e.target.value)} />

                        <div className="id_"><p>Complemento</p></div>
                        <input type="text" className="complementoFazenda" value={complementoForm} onChange={e => setComplementoForm(e.target.value)} />

                        <div className="id_"><p>Numero</p></div>
                        <input type="text" className="numeroFazenda" value={numeroForm} onChange={e => setNumeroForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarFazenda;
