import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Menu from '../../components/menu';

import gadoSeguro from '../../services/connectionGadoSeguro';

const CadastrarVacina = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState(0);
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            fabricante: fabricanteForm,
            informacoesExtras: informacoesExtrasForm
        };

        try {
            const { data } = await gadoSeguro.post('/vacina', payload);
            navigate('/vacinas');
        } catch (error) {
            toast.error("Cadastro falhou!");
        }
    };


    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="form-control" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="form-control" onChange={e => setFabricanteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="form-control" onChange={e => setInformacoesExtrasForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoCadastrar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarVacina;