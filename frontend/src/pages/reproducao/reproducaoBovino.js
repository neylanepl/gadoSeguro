import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';

import gadoSeguro from '../../services/connectionGadoSeguro';

const ReproducaoBovino = () => {

    const [reproducoes, setReproducao] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReproducao = async () => {
            try {
                const response = await gadoSeguro.get('/reproducao');
                console.log("response: " + response.data);
                setReproducao(response.data);
            } catch (error) {
                console.error("erro ao listar reproducoes: ", error);
            }
        };

        fetchReproducao();
    }, []);

    return (
        <div id="wrapper" style={{ background: "#F0F1DF" }}>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}>Acompanhamento de Gravidez</h1>
            <div className="t" style={{ margin: "5%", marginLeft: "10%", marginRight: "20%" }}>


                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Id das Vacas</th>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Data prevista nascimento</th>
                            <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Dias de Gestação</th>
                        </tr>
                    </thead>

                    <tbody className="tabelaListagem text-center" >

                    {reproducoes.map(reproducao => (
                            <tr key={reproducao.Vaca_idVaca}>
                                <td>{reproducao.Vaca_idVaca}</td>
                                <td>{reproducao.data_nascimento}</td>
                                <td>{reproducao.dias_gestao}</td>
                        </tr>
 ))}
                    </tbody>
                        
                </table>

            </div>
        </div>
    );

}


export default ReproducaoBovino;