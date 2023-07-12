import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Base from '../base/base';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

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
            toast.success("Cadastro realizado com sucesso!")
            navigate('/');
        } catch (error) {
            toast.error("Cadastro falhou!");
        }
    };

    return (
        <Base title={"Cadastro"}>
            <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", 
                    maxWidth: "600px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setNomeForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCpf">
                    <Form.Label style={{ fontWeight: "bold" }}>CPF</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCPFForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>E-mail</Form.Label>
                    <Form.Control type="email" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setEmailForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCargo">
                    <Form.Label style={{ fontWeight: "bold" }}>Cargo</Form.Label>
                    <Form.Select required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCargoForm(e.target.value)} >
                            <option value="">Selecione o cargo</option>
                            <option value="empregado">Empregado</option>
                            <option value="veterinário">Veterinário</option>
                            <option value="fazendeiro">Fazendeiro</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSenha">
                    <Form.Label style={{ fontWeight: "bold" }}>Senha</Form.Label>
                    <Form.Control type="password" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setSenhaForm(e.target.value)} />
                </Form.Group>
                <Form.Group className='text-center'>
                    <button type="submit" value="submit" className="btn btn-success"
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                        Cadastrar
                    </button>
                    <ToastContainer />
                </Form.Group>
            </Form>
        </Base>
    );
};

export default CadastrarPessoa;