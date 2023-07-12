import React, { useState } from 'react';
import gadoSeguro from '../../services/connectionGadoSeguro';
import { useNavigate } from 'react-router-dom';

import Base from '../base/base';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';



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
            toast.success("Cadastro realizado com sucesso!")
            navigate('/fazendas');

        } catch (error) {
            toast.error("Cadastro falhou!")
        }
    };

    return (
        <Base title={"Cadastro de fazenda"}>
            <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", minWidth: "500px",
                maxWidth: "800px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setNomeForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSitio">
                    <Form.Label style={{ fontWeight: "bold" }}>Sítio</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setSitioForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCidade">
                    <Form.Label style={{ fontWeight: "bold" }}>Cidade</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCidadeForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCep">
                    <Form.Label style={{ fontWeight: "bold" }}>Cep</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setCepForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlComplemento">
                    <Form.Label style={{ fontWeight: "bold" }}>Complemento</Form.Label>
                    <Form.Control type="name" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setComplementoForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNumero">
                    <Form.Label style={{ fontWeight: "bold" }}>Número</Form.Label>
                    <Form.Control type="number" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setNumeroForm(e.target.value)} />
                </Form.Group>
                <Form.Group className='text-center'>
                    <button type="submit" value="submit" className="btn btn-success"
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                        Editar
                    </button>
                    <ToastContainer />
                </Form.Group>
            </Form>
        </Base>
    );
};

export default CadastrarFazenda;