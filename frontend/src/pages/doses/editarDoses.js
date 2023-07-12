import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Menu from '../../components/menu';


const EditarDose = () => {

    const location = useLocation();
    const dose = location.state.dose;

    const [IdForm, setIdForm] = useState('');
    const [NomeForm, setNomeForm] = useState('');
    const [loteForm, setLoteForm] = useState('');
    const [infoForm, setInfoForm] = useState('');

    const [dataAplicadaForm, setDataAplicadaForm] = useState('');
    const [dataPrevForm, setDataPrevForm] = useState('');

    useEffect(() => {
        setIdForm(dose.id);
        setNomeForm(dose.nome_vacina);
        setLoteForm(dose.lote);
        setInfoForm(dose.info);
        setDataAplicadaForm(formatDateToString(new Date(dose.data_aplicada)));
        setDataPrevForm(formatDateToString(dose.data_prev !== null ? new Date(dose.data_prev) : ''));
    }, [dose]);

    const navigate = useNavigate();

    const formatDateToString = (date) => {
        if (date instanceof Date && !isNaN(date)) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        return '';
    };
    

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            idDose: IdForm,
            nome: NomeForm,
            lote: loteForm,
            info: infoForm,
            data_aplicada: dataAplicadaForm,
            data_prev: dataPrevForm
        };

        try {
            await gadoSeguro.put(`/dose/${dose.idDose}`, payload);
            const response = await gadoSeguro.get('/dose');
            navigate('/dose/listarDoses')
            console.log('Dados atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar os dados da fazenda:', error);
        }
    }

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Dose </h1>
            <div className="formularioCadastroDose" >
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" value={NomeForm} className="nomeDose" onChange={e => setNomeForm(e.target.value)} />

                        <div className="id_"><p>Lote</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="text" value={loteForm} required className="loteDose" onChange={e => setLoteForm(e.target.value)} />

                        <div className="id_"><p>Informações Extras</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} required type="text" value={infoForm} className="infoDose" onChange={e => setInfoForm(e.target.value)} />

                        <div className="id_"><p>Data Aplicada</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="date" value={dataAplicadaForm} required className="dataAplicadaDose" onChange={e => setDataAplicadaForm(e.target.value)} />

                        <div className="id_"><p>Data Prev</p></div>
                        <input style={{ padding: "5px", paddingLeft: "10px" }} type="date" value={dataPrevForm} className="dataPrevDose" onChange={e => setDataPrevForm(e.target.value)} />
                        <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px" }}>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarDose;
