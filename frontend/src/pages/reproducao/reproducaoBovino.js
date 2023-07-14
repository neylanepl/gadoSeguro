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

    function formatDateToString(date) {
        if (date instanceof Date && !isNaN(date)) {
          const dia = String(date.getDate()).padStart(2, '0');
          const mes = String(date.getMonth() + 1).padStart(2, '0');
          const ano = String(date.getFullYear());
      
          return dia + '/' + mes + '/' + ano;
        } else if (typeof date === 'string') {
          const data = new Date(date);
          if (data instanceof Date && !isNaN(data)) {
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = String(data.getFullYear());
      
            return dia + '/' + mes + '/' + ano;
          }
        }
      
        return null;
      } 

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
                                <td>{formatDateToString(reproducao.data_nascimento)}</td>
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