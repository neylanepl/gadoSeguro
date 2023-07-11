import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
import '../../styles/css/homeGenerica.css';

const DietaHome = () => {
    const navigate = useNavigate();

    const handleClickCadastro = () => {
        navigate('/dieta/cadastrarDieta');
    };

    const handleClickListar = () => {
        navigate('/dieta/listarDieta');
    };


    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Dieta</h1>

            <div className="container" style={{ background: "#F0F1DF" }}>
                <div className="formulario">
                    
                    <button className="botao" onClick={handleClickCadastro}>Cadastrar Dieta</button>

                    <button className="botao" onClick={handleClickListar}>Listar Dieta</button>
                </div>
            </div>

        </div>
    );
};

export default DietaHome;
