import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
import '../../styles/css/global.css';

import gadoSeguro from '../../services/connectionGadoSeguro';

import Base from '../base/base';
import BtnGreen from '../../components/buttongreen';

const ListarDose = () => {
    const [doses, setDoses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoses = async () => {
            try {
                const response = await gadoSeguro.get('/dose');
                console.log("response: " + response.data);
                setDoses(response.data);
            } catch (error) {
                console.error("erro ao listar doeses: ", error);
            }
        };

        fetchDoses();
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

    const deletarDose = async (id) => {
        try {
            const response = await gadoSeguro.delete(`/dose/${id}`);
        } catch (error) {
            console.error("erro ao deletar dose: ", error);
        }
    };

    return (
        <Base title={"Dose"}>
            <div 
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                style={{ marginBottom: "2%", width: "auto" }}>
                <BtnGreen 
                    title={"Cadastrar dose"}
                    route={'/doses/cadastrardose'}
                />
            </div>

            <table className="table table-bordered" >
                <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                    <tr>
                        <th style={{ backgroundColor: "#cdd8a9" }} scope="col">ID</th>
                        <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Nome Vacina</th>
                        <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Data Aplicada</th>
                        <th style={{ backgroundColor: "#cdd8a9" }} scope="col">Data Prevista</th>
                        <th style={{ backgroundColor: "#cdd8a9" }} ></th>
                    </tr>
                </thead>

                    <tbody className="text-center" >
                        {doses.map(dose => (
                            <tr key={dose.id}>
                                <td>{dose.idDose}</td>
                                <td>{dose.nome_vacina}</td>
                                <td>{dose.data_aplicada ? formatDateToString(dose.data_aplicada) : ''}</td>
                                <td>{dose.data_prev ? formatDateToString(dose.data_prev) : ''}</td>
                                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <button className="btn btn-primary" style={{ color: "white", textDecoration: "none", margin: "2%", backgroundColor: "#47a2ed", border: "none" }} variant="warning"
                                        onClick={e => navigate(`/doses/editarDose/${dose.idDose}`, { state: { dose } })}>
                                        Editar
                                        <span className="editar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" color='white' viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </span>
                                    </button>

                                    <button className="btn btn-danger"
                                        style={{ color: "white", textDecoration: "none", margin: "2%", backgroundColor: "#d10606", border: "none" }} variant="warning" onClick={e => deletarDose(dose.id)}>
                                        Deletar
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" color='white' viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </td>

                        </tr>
                        ))}
                </tbody>

            </table>
        </Base>
    );
};

export default ListarDose;