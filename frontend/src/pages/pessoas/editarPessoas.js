import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/css/global.css';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Menu from '../../components/menu';

const EditarPessoa = () => {

    const location = useLocation();
    const pessoa = location.state.pessoa;

    const [nomeForm, setNomeForm] = useState('');
    const [cpfForm, setCPFForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [cargoForm, setCargoForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    useEffect(() => {
        setNomeForm(pessoa.nome);
        setCPFForm(pessoa.cpf);
        setEmailForm(pessoa.email);
        setCargoForm(pessoa.cargo);
        setSenhaForm(pessoa.senha);
    }, [pessoa]);

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
            await gadoSeguro.put(`/pessoa/${pessoa.cpf}`, payload);
            const response = await gadoSeguro.get('/pessoa');
            navigate('/pessoas/listarPessoas')
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
     }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Usuário </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomePessoa" value={nomeForm}  onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>CPF</p></div>
                        <input type="text" className="cpfPessoa" value={cpfForm}  required onChange={e => setCPFForm(e.target.value)} />

                        <div className="id_"><p>Email</p></div>
                        <input type="text" className="emailPessoa" value={emailForm}  onChange={e => setEmailForm(e.target.value)} />

                        <div className="id_"><p>Cargo</p></div>
                        <input type="text" className="cargoPessoa" value={cargoForm}  onChange={e => setCargoForm(e.target.value)} />
                        <select className="cargoPessoa" value={cargoForm}  required onChange={e => setCargoForm(e.target.value)}>
                            <option value="">Selecione o cargo</option>
                            <option value="veterinário">Veterinário</option>
                            <option value="empregado">Fazendeiro</option>
                        </select>


                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarPessoa;