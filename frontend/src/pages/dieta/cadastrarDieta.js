import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/alimentacaoBovino.css';
import Menu from '../../components/menu';

const CadastrarDieta = () => {

    const [descricaoForm, setDescricaoForm] = useState('');
    const [restricaoAlimentarForm, setRestricaoAlimentarForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            descricao: descricaoForm,
            restricaoAlimentar: restricaoAlimentarForm
        };
    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> CADASTRAR DIETA </h1>
            <div className="formularioDieta" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Descrição</p></div>
                        <input type="text" className="descricaoDieta" required onChange={e => setDescricaoForm(e.target.value)} />

                        <div className="id_"><p>Restrição Alimentar</p></div>
                        <input type="text" className="restricaoAlimentar" required onChange={e => setRestricaoAlimentarForm(e.target.value)} />

                        <div>
                            <button variant="warning" type="submit" value="submit" className="btn btn-success"
                                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0" }}>
                                Cadastre-se
                            </button>
                            <button className="btn btn-success"
                                style={{ backgroundColor: "#6D3B00", borderColor: "#6D3B00", marginTop: "30px" }} variant="warning"
                                onClick={e => navigate('/login')}>
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

};

export default CadastrarDieta;