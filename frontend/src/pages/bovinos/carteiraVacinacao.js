import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
import '../../styles/css/global.css';
//import '../../styles/css/glob.css';
//import { Table } from "react-bootstrap"

const CarteriaVacinacao = () => {
    const navigate = useNavigate();

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }} >
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}>Carteira de Vacinação</h1>

            <div className="listarBovino" style={{ margin: "5%", marginLeft: "10%", marginRight: "20%" }}>

                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>ID</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Nome</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Sexo</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Raça</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Peso</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Idade</th>
                        </tr>
                    </thead>
                    <tbody className="tabelaListagem text-center" >
                        <tr>
                            <td >1</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <div className="listarBovino" style={{ margin: "5%", marginLeft: "10%", marginRight: "20%" }}>

                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Vacina</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Data</th>
                            <th scope="col" style={{ backgroundColor: "#cdd8a9" }}>Dose</th>
                        </tr>
                    </thead>
                    <tbody className="tabelaListagem text-center" >
                        <tr>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default CarteriaVacinacao;
