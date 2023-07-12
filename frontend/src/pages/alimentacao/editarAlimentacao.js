import React, { useState } from 'react';

import Menu from '../../components/menu';

const EditarAlimentacao = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [faltaConsumirForm, setFaltaConsumirForm] = useState('');
    const [qntDiariaRecomendadaForm, setQntDiariaRecomendadaForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Alimentação </h1>
            <div className="formularioAlimentacao" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input type="text" className="nomeAlimentacao" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Falta consumir</p></div>
                        <input type="text" className="faltaConsumirAlimentacao" onChange={e => setFaltaConsumirForm(e.target.value)} />

                        <div className="id_"><p>Quantidade diária recomendada</p></div>
                        <input type="text" className="qntDiariaRecomendadaAlimentacao" onChange={e => setQntDiariaRecomendadaForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px", padding: 4, borderRadius: "5px", width: "70px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarAlimentacao;