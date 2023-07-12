import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/menu';
import gadoSeguro from '../../services/connectionGadoSeguro';

const CadastrarDose = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState(0);
    const [infoForm, setInfoForm] = useState('');
    const [dataAplicadaForm, setDataAplicadaForm] = useState('');
    const [dataPrevForm, setDataPrevForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            lote: loteForm,
            info: infoForm,
            data_aplicada: dataAplicadaForm,
            data_prev: dataPrevForm
        };

        try {
            const { data } = await gadoSeguro.post('/dose', payload);
            console.log("Cadastro realizado com sucesso!")
            navigate('/dose/dosesHome');
        } catch (error) {
            console.log("Cadastro falhou!", error)
        }
    };


    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Dose </h1>

            <div className="formularioCadastroDose" style={{ marginBottom: "10%" }}>

                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">

                        <div className="id_">
                            <p>Tipo Vacina</p>
                        </div>
                        {/**    ENTRAR COM OS NOMES DAS VACINAS
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
                        </div> */}

                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="nomeDose" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Lote</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="loteDose" onChange={e => setLoteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="infoDose" onChange={e => setInfoForm(e.target.value)} />

                        <div className="id_"><p>Data Aplicada</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="date" required className="dataAplicadaDose" onChange={e => setDataAplicadaForm(e.target.value)} />

                        <div className="id_"><p>Data Prev</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="date" className="dataPrevDose" onChange={e => setDataPrevForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoCadastrar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarDose;