import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Base from '../base/base';
import { FormSelect } from 'react-bootstrap';


const CadastrarPessoa = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [cpfForm, setCPFForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [cargoForm, setCargoForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            cpf: cpfForm,
            email: emailForm,
            cargo: cargoForm,
            senha: senhaForm
        };

        try {
            const { data } = await gadoSeguro.post('/pessoa', payload);
            console.log("Cadastro realizado com sucesso!")
            navigate('/');
        } catch (error) {
            console.log("Cadastro falhou!", error)
        }
    };

    return (
        <Base title={"Cadastro"}>
            <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
            <div className="id_"><p>Nome</p></div>
                <input type="text" className="nomePessoa" required onChange={e => setNomeForm(e.target.value)} />

                <div className="id_"><p>CPF</p></div>
                <input type="text" className="cpfPessoa" required onChange={e => setCPFForm(e.target.value)} />

                <div className="id_"><p>Email</p></div>
                <input type="email" className="emailPessoa" required onChange={e => setEmailForm(e.target.value)} />

                <div className="id_"><p>Cargo</p></div>
                <select className="form-select" required onChange={e => setCargoForm(e.target.value)}>
                    <option value="">Selecione o cargo</option>
                    <option value="veterinário">Veterinário</option>
                    <option value="empregado">Fazendeiro</option>
                </select>

                <div className="id_"><p>Senha</p></div>
                <input type="password" className="senhaPessoa" required onChange={e => setSenhaForm(e.target.value)} />

                <div>
                    <button variant="warning" type="submit" value="submit" className="botaoCadastrar btn btn-success"
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </Base>
    );
};

export default CadastrarPessoa;

