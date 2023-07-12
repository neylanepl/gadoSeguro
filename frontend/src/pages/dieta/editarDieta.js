import React, { useState } from 'react';

import Menu from '../../components/menu';

const EditarDieta = () => {
    const [descricaoForm, setDescricaoForm] = useState('');
    const [restricaoAlimentarForm, setRestricaoAlimentarForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Dieta </h1>
            <div className="formularioDieta" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Descrição</p></div>
                        <input type="text" className="nomeDieta" onChange={e => setDescricaoForm(e.target.value)} />

                        <div className="id_"><p>Restrição Alimentar</p></div>
                        <input type="text" className="restricaoAlimentarDieta" onChange={e => setRestricaoAlimentarForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarDieta;