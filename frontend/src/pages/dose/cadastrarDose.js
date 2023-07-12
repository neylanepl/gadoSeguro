import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/menu';

const CadastrarDose = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState(0);
    const [infoForm, setInfoForm] = useState('');
    const [dataAplicadaForm, setDataAplicadaForm] = useState(0);
    const [dataPrevForm, setDataPrevForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            lote: loteForm,
            info: infoForm,
            dataAplicada: dataAplicadaForm,
            dataPrev: dataPrevForm
        };

        // Navegar para outra página após o envio do formulário
        navigate('/');
    };


    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF", minHeight: "100vh", paddingBottom: "7%" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Dose </h1>

            <div className="formularioCadastroDose" style={{ margin: "0 auto" }}>

                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div" style={{width: "450px"}}>

                        <div className="id_" style={{width: "450px"}}>
                            <p>Tipo Vacina</p>
                        </div>
                        {
                            /**    ENTRAR COM OS NOMES DAS VACINAS
                            <div className='checkboxContainer'>
                                {vacinas.map(vacina => (
                                    <div key={vacina.nome} className='checkboxItem'>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={vacina.nome}
                                                checked={vacinasSelecionados.includes(vacina.nome)}
                                                onChange={() => handleSelecionarVacina(vacina.nome)}
                                            />
                                            {vacina.nome}
                                        </label>
                                    </div>
                                ))}
                            </div> */
                        }

                        <div className="id_" style={{width: "450px"}}><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="form-control" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_" style={{width: "450px"}}><p>Lote</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="form-control" onChange={e => setLoteForm(e.target.value)} />

                        <div className="id_" style={{width: "450px"}}><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="form-control" onChange={e => setInfoForm(e.target.value)} />

                        <div className="id_" style={{width: "450px"}}><p>Data Aplicada</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="form-control" onChange={e => setDataAplicadaForm(e.target.value)} />

                        <div className="id_" style={{width: "450px"}}><p>Data Prev</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="form-control" onChange={e => setDataPrevForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoCadastrar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarDose;