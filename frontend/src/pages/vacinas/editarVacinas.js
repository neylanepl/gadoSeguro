import React, { useState, useEffect } from 'react';
import gadoSeguro from '../../services/connectionGadoSeguro';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';

const EditarVacina = () => {
    const location = useLocation();
    const vacina = location.state.vacina;

    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState('');
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    useEffect(() => {
        setNomeForm(vacina.nome_vacina);
        setFabricanteForm(vacina.fabricante);
        setInformacoesExtrasForm(vacina.info);
    }, [vacina]);

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            fabricante: fabricanteForm,
            informacoesExtras: informacoesExtrasForm
        };

        try {
            await gadoSeguro.put(`/vacina/${vacina.nome_vacina}`, payload);
            const response = await gadoSeguro.get('/vacina');
            navigate('/vacinas')
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
     }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="nomeVacina" value={nomeForm} onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="fabricanteVacina" value={fabricanteForm} onChange={e => setFabricanteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="informacaoVacina" value={informacoesExtrasForm} onChange={e => setInformacoesExtrasForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarVacina;