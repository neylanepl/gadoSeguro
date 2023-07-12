import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Base from '../base/base';
import { Form } from 'react-bootstrap';

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
            navigate('/pessoas')
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
     }

    return (
        <Base title={"Editar usuário"}>
            <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", 
                    maxWidth: "600px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                    <Form.Control type="name" required value={nomeForm}
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setNomeForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCpf">
                    <Form.Label style={{ fontWeight: "bold" }}>CPF</Form.Label>
                    <Form.Control type="name" required value={cpfForm}
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCPFForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>E-mail</Form.Label>
                    <Form.Control type="email" required value={emailForm}
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setEmailForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCargo">
                    <Form.Label style={{ fontWeight: "bold" }}>Cargo</Form.Label>
                    <Form.Select required value={cargoForm}
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCargoForm(e.target.value)} >
                            <option value="">Selecione o cargo</option>
                            <option value="empregado">Empregado</option>
                            <option value="veterinário">Veterinário</option>
                            <option value="fazendeiro">Fazendeiro</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='text-center'>
                    <button type="submit" value="submit" className="btn btn-success"
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                        Editar
                    </button>
                </Form.Group>
            </Form>
        </Base>
    );
}

export default EditarPessoa;