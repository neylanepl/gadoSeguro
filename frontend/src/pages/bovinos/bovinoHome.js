import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';

import '../../styles/css/homeGenerica.css';

const BovinoHome = () => {
    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/bovinos/cadastrarBovinos');
    };

    const handleClickEdicao = () => {
        navigate('/bovinos/editarBovinos');
    };

    const handleClickListar = () => {
        navigate('/bovinos/listarBovino');
    };


    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Bovinos</h1>

            <div className="container" style={{ background: "#F0F1DF" }}>
                <div className="formulario">
                    {/* Botão para navegar para a página cadastrarBovinos */}
                    <button className="botao" onClick={handleClickCadastro}>Cadastrar Bovinos</button>

                    <button className="botao" onClick={handleClickEdicao}>Editar Bovinos</button>

                    <button className="botao" onClick={handleClickListar}>Listar Bovinos</button>
                </div>
            </div>
        </div>
    );
};

export default BovinoHome;
