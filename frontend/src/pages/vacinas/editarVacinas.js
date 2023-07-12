import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';

const EditarVacina = () => {

    const location = useLocation();
    const vacina = location.state.vacina;

    const [NomeForm, setNomeForm] = useState('');
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
            nome_vacina: NomeForm,
            info: informacoesExtrasForm,
            fabricante: fabricanteForm
        };

        try {
            await gadoSeguro.put(`/vacina/${vacina.nome_vacina}`, payload);
            const response = await gadoSeguro.get('/vacina');
            navigate('/vacina/listarVacinas')
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
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="nomeVacina" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="fabricanteVacina" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="informacaoVacina" onChange={e => setInformacoesExtrasForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarVacina;