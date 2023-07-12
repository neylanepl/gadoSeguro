import React, { useState, useEffect } from 'react';
import '../../styles/css/global.css';
import Menu from '../../components/menu';
import { useLocation, useNavigate } from 'react-router-dom';
import gadoSeguro from '../../services/connectionGadoSeguro';

const EditarVacina = () => {
    const location = useLocation();
    const vacina = location.state.vacina;

    const [NomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState('');
    const [informacoesExtrasForm, setInfoForm] = useState('');

    useEffect(() => {
        setNomeForm(vacina.nome_vacina);
        setInfoForm(vacina.info);
        setFabricanteForm(vacina.fabricante);
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
            
            // Faz a requisição para atualizar os dados da fazenda
            await gadoSeguro.put(`/vacina/${vacina.nome_vacina}`, payload);
            console.log(gadoSeguro.get(`/vacina/${vacina.nome_vacina}`))
            const response = await gadoSeguro.get('/vacina');
            // Redireciona para outra página ou faz alguma ação de sucesso
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            // Lida com possíveis erros na requisição
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
    };

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={handleSubmitForm}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="nomeVacina" value={NomeForm} onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Fabricante</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="fabricanteVacina" value={fabricanteForm} onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" className="informacaoVacina" value={informacoesExtrasForm} onChange={e => setInfoForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarVacina;