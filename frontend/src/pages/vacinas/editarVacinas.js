import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';

const EditarVacina = () => {

    const [NomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState('');
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const handleSubmitForm = async e => { }

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="nomeVacina" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="fabricanteVacina" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="informacaoVacina" onChange={e => setInformacoesExtrasForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarVacina;