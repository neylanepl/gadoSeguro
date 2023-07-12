import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';
import '../../styles/css/global.css';

const EditarBovino = () => {
    const [idFazendaForm, setIdFazendaForm] = useState(0);
    const [idVacaForm, setIdVacaForm] = useState(0);
    const [NomeForm, setNomeForm] = useState('');
    const [pesoForm, setPesoForm] = useState(0);
    const [dataForm, setDataForm] = useState('');
    const [sexoForm, setSexoForm] = useState('');
    const [reprodutorForm, setReprodutorForm] = useState('');
    const [corForm, setCorForm] = useState('');
    const [chifreForm, setChifreForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Bovino </h1>
            <div className="formularioCadastroBovino" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeBovino" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fazenda</p></div>
                        <select className="vacaBovino" required onChange={e => setIdFazendaForm(e.target.value)}>
                            <option value="">Selecione a fazenda</option>
                            <option value="fazenda">fazenda 1</option>
                            <option value="fazenda">fazenda 2</option>
                        </select>

                        <div className="id_"><p>Vaca</p></div>
                        <select className="vacaBovino" required onChange={e => setIdVacaForm(e.target.value)}>
                            <option value="">Selecione a vaca mãe</option>
                            <option value="vaca">Vaca 1</option>
                            <option value="vaca">Vaca 2</option>
                        </select>

                        <div className="id_"><p>Peso</p></div>
                        <input type="number" className="pesoBovino" onChange={e => setPesoForm(e.target.value)} />

                        <div className="id_"><p>Idade</p></div>
                        <input type="date" className="idadeBovino" onChange={e => setDataForm(e.target.value)} />

                        <div className="id_"><p>Sexo</p></div>
                        <div className="id_">
                            <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                                <Form.Check type="radio" id="Femea" label="Sim" onClick={(e) => setSexoForm(e.target.id)} />
                                <Form.Check type="radio" id="Nao" label="Nao" onClick={(e) => setSexoForm(e.target.id)} />
                            </div>
                        </div>

                        <div className="id_"><p>Reprodutor</p></div>
                        <div className="id_">
                            <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                                <Form.Check type="radio" id="Sim" label="Fêmea" onClick={(e) => setSexoForm(e.target.id)} />
                                <Form.Check type="radio" id="Macho" label="Macho" onClick={(e) => setSexoForm(e.target.id)} />
                            </div>
                        </div>

                        <div className="id_"><p>Cor</p></div>
                        <div className="id_">
                            <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                                <Form.Check type="radio" id="Preto" label="Preto" onClick={(e) => setCorForm(e.target.id)} />
                                <Form.Check type="radio" id="Branco" label="Branco" onClick={(e) => setCorForm(e.target.id)} />
                                <Form.Check type="radio" id="Laranja" label="Laranja" onClick={(e) => setCorForm(e.target.id)} />
                                <Form.Check type="radio" id="Amarelo" label="Amarelo" onClick={(e) => setCorForm(e.target.id)} />
                                <Form.Check type="radio" id="Vermelho" label="Vermelho" onClick={(e) => setCorForm(e.target.id)} />
                            </div>
                        </div>

                        <div className="id_"><p>Chifre</p></div>
                        <div className="id_">
                            <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                                <Form.Check type="radio" id="Chifre" label="Sim" onClick={(e) => setChifreForm(e.target.id)} />
                                <Form.Check type="radio" id="Chifre" label="Não" onClick={(e) => setChifreForm(e.target.id)} />
                            </div>
                        </div>
                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "60px", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarBovino;