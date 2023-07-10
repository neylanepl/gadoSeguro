import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarPessoa.css';
import Menu from '../../components/menu';
import gadoSeguro from '../../services/connectionGadoSeguro';


const CadastrarPessoa = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [cargoForm, setCargoForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            email: emailForm,
            cargo: cargoForm,
            senha: senhaForm
        };

        try {
            const { data } = await gadoSeguro.post('/pessoa', payload);
            console.log("Cadastro realizado com sucesso!")
            navigate('/login');

        } catch (error) {
            console.log("Cadastro falhou!", error)
        }
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Casdastro </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomePessoa" required onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Email</p></div>
                        <input type="email" className="emailPessoa" required onChange={e => setEmailForm(e.target.value)} />

                        <div className="id_"><p>Cargo</p></div>
                        <input type="text" className="cargoPessoa" required onChange={e => setCargoForm(e.target.value)} />

                        <div className="id_"><p>Senha</p></div>
                        <input type="password" className="senhaPessoa" required onChange={e => setSenhaForm(e.target.value)} />

                        <div>
                            <button variant="warning" type="submit" value="submit" className="btn btn-success"
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                                Cadastre-se
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CadastrarPessoa;

