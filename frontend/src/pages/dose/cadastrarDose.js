import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import gadoSeguro from '../../services/connectionGadoSeguro';

import Base from '../base/base';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const CadastrarDose = () => {

    const [vacinas, setVacinas] = useState([]);

    useEffect(() => {
        const fetchVacinas = async () => {
            try {
                const response = await gadoSeguro.get('/vacina');
                console.log("response: " + response.data);
                setVacinas(response.data);
            } catch (error) {
                console.error("erro ao listar vacinas: ", error);
            }
        };

        fetchVacinas();
    }, []);

    const [bovinos, setBovinos] = useState([]);

    useEffect(() => {
        const fetchBovinos = async () => {
            try {
                const response = await gadoSeguro.get('/bovino');
                console.log("response: " + response.data);
                setBovinos(response.data);
            } catch (error) {
                console.error("erro ao listar Bovinos: ", error);
            }
        };

        fetchBovinos();
    }, []);

    const [nomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState(0);
    const [infoForm, setInfoForm] = useState('');
    const [dataAplicadaForm, setDataAplicadaForm] = useState(0);
    const [dataPrevForm, setDataPrevForm] = useState('');

    const [bovinoForm, setIdBovino] = useState('');


    const navigate = useNavigate();


    const handleSubmitForm = async e => {
        e.preventDefault();
        const payloadDose = {
            nome_vacina: nomeForm,
            lote: loteForm,
            info: infoForm,
            data_aplicada: dataAplicadaForm,
            data_prev: dataPrevForm
        };

        try{
            const { data } = await gadoSeguro.post('/dose', payloadDose);
            console.log("cadastrando")
        }catch (error){
            console.error(error)
        }

        // Navegar para outra página após o envio do formulário
        navigate('/doses');
    };


    return (
        <Base title={"Cadastro de dose"}>
      <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", minWidth: "500px",
                maxWidth: "800px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlVacina">
                    <Form.Label style={{ fontWeight: "bold" }}>Vacinas</Form.Label>
                    <Form.Select required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setNomeForm(e.target.value)}>
                            <option value="">Selecione a Vacina</option>{vacinas.map(vacina => (
                            <option key={vacina.nome_vacina} value={vacina.nome_vacina}>{vacina.nome_vacina}</option>
                         ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlFazenda">
                    <Form.Label style={{ fontWeight: "bold" }}>Bovino</Form.Label>
                    <Form.Select required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setIdBovino(e.target.value)}>
                            <option value="">Selecione O Bovino</option>{bovinos.map(bovino => (
                            <option key={bovino.idBovino} value={bovino.idBovino}>{bovino.nome}</option>
                         ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Lote</Form.Label>
                    <Form.Control type="text" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setLoteForm(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Informações Extras</Form.Label>
                    <Form.Control type="text" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setInfoForm(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Data de Aplicação</Form.Label>
                    <Form.Control type="date" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setDataAplicadaForm(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Data Prevista</Form.Label>
                    <Form.Control type="date"  
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setDataPrevForm(e.target.value)} />
                </Form.Group>
                
                <Form.Group className='text-center'>
                    <button type="submit" value="submit" className="btn btn-success"
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                        Registrar
                    </button>
                    <ToastContainer />
                </Form.Group>
            </Form>
    </Base>

    );
};

export default CadastrarDose;