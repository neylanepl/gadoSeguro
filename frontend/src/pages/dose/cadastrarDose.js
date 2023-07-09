import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarDose.css';
import '../../styles/css/alimentacaoBovino.css';
import Menu from '../../components/menu';

const CadastrarDose = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState(0);
    const [infoForm, setInfoForm] = useState('');
    const [dataAplicadaForm, setDataAplicadaForm] = useState(0);
    const [dataPrevForm, setDataPrevForm] = useState('');

    const [vacinas, setVacina] = useState([]);
    const [vacinasSelecionados, setVacinasSelecionados] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Recupera os dados do armazenamento local
        const dadosVacina = localStorage.getItem('dadosVacinas');
        if (dadosVacina) {
            const vacinaSalvos = JSON.parse(dadosVacina);
            setVacina(vacinaSalvos);
        }
    }, []);;

    const handleSelecionarVacina = (vacina) => {
        if (vacinasSelecionados.includes(vacina)) {
            setVacinasSelecionados(vacinasSelecionados.filter(item => item !== vacina));
        } else {
            setVacinasSelecionados([...vacinasSelecionados, vacina]);
        }
    };

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            lote: loteForm,
            info: infoForm,
            dataAplicada: dataAplicadaForm,
            dataPrev: dataPrevForm,
            vacinasSelecionados: vacinasSelecionados
        };

        // Aqui você pode adicionar sua lógica de envio de dados para a API
        // e manipular a resposta conforme necessário

        // Navegar para outra página após o envio do formulário
        navigate('/');
    };


    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Cadastrar Dose </h1>
            <div className="formularioCadastroDose" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">

                        <div className="id_">
                            <p>Tipo Vacina</p>
                        </div>
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
                        </div>

                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="nomeDose" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Lote</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="loteDose" onChange={e => setLoteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="infoDose" onChange={e => setInfoForm(e.target.value)} />

                        <div className="id_"><p>Data Aplicada</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" required className="dataAplicadaDose" onChange={e => setDataAplicadaForm(e.target.value)} />

                        <div className="id_"><p>Data Prev</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" className="dataPrevDose" onChange={e => setDataPrevForm(e.target.value)} />

                        <button variant="warning" type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastrarDose;