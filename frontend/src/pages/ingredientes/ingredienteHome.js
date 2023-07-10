import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';

import '../../styles/css/homeGenerica.css';

const IngredenteHome = () => {
    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/ingredientes/cadastrarIngrediente');
    };

    const handleClickListar = () => {
        navigate('/ingredientes/listarIngrediente');
    };


    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Ingrediente</h1>

            <div className="container" style={{ background: "#F0F1DF" }}>
                <div className="formulario">
                    {/* Botão para navegar para a página cadastrarBovinos */}
                    <button className="botao" onClick={handleClickCadastro}>Cadastrar Ingrediente</button>

                    <button className="botao" onClick={handleClickListar}>Listar Ingrediente</button>
                </div>
            </div>
        </div>
    );
};

export default IngredenteHome;
