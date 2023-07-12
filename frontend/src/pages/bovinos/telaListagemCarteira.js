import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
//import '../../styles/css/glob.css';
//import { Table } from "react-bootstrap"

const TelaListagemCarteira = () => {
    const navigate = useNavigate();

    const data = [
        { id: 1, col1: 'Dado 1', col2: 'Ver' },
        { id: 2, col1: 'Dado 2', col2: 'Ver' },
        { id: 3, col1: 'Dado 3', col2: 'Ver' }
    ];

    const handleButtonClick = () => {
        navigate('/bovinos/carteiraVacinacao');
    };

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }} >
            <Menu />

            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Tela Vacinação </h1>

            <div className="listarBovino" style={{ margin: "5%", marginLeft: "10%", marginRight: "20%" }}>

                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{ backgroundColor: "#3e3f3b" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Nome Animal</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Ver</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map(item => (
                            <tr key={item.id}  >
                                <td style={{ background: "#cdd8a9" }}>{item.col1}</td>
                                <td style={{ background: "#cdd8a9" }}>
                                    <button className='botaoCarteira'
                                        style={{ background: "#74a318", borderColor: "#6d3b00", borderRadius: "4px", padding: "4px", width: "100%" }}
                                        onClick={() => handleButtonClick(item.id)}>
                                        {item.col2}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default TelaListagemCarteira;
