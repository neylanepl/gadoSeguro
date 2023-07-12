import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';


const ReproducaoBovino = () => {

    const navigate = useNavigate();

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}>Análise de Reprodução</h1>
            <div className="t" style={{ margin: "5%", marginLeft: "10%", marginRight: "20%" }}>


                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Nome das Vacas</th>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Data prevista nascimento</th>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Dias de Gestação</th>
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

}


export default ReproducaoBovino;