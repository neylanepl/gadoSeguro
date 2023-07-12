import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';


const EditarDose = () => {

    const [NomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState(0);
    const [infoForm, setInfoForm] = useState('');
    const [dataAplicadaForm, setDataAplicadaForm] = useState(0);
    const [dataPrevForm, setDataPrevForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Dose </h1>
            <div className="formularioCadastroDose" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="nomeDose" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Lote</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="loteDose" onChange={e => setLoteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="infoDose" onChange={e => setInfoForm(e.target.value)} />

                        <div className="id_"><p>Data Aplicada</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="dataAplicadaDose" onChange={e => setDataAplicadaForm(e.target.value)} />

                        <div className="id_"><p>Data Prev</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="dataPrevDose" onChange={e => setDataPrevForm(e.target.value)} />
                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarDose;