import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
import '../../styles/css/homeGenerica.css'

const FazendaHome = () => {
    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/fazendas/cadastrarFazenda');
    };

    const handleClickListar = () => {
        navigate('/fazendas/listarFazenda');
    };

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Fazenda </h1>

            <div className="container" style={{ background: "#F0F1DF" }}>
                <div className="formulario">
                    {/* Botão para navegar para a página cadastrarBovinos */}
                    <button className="botao" onClick={handleClickCadastro}>Cadastrar Fazenda</button>

                    <button className="botao" onClick={handleClickListar}>Listar Fazenda</button>
                </div>
            </div>
        </div>
    );

};

export default FazendaHome;
