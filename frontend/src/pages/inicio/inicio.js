import React from 'react';
import { isAuthenticated } from '../../services/auth';
import { Col, Row } from 'react-bootstrap';
import Base from '../base/base';
const Inicio = () => {
  const redirectToBovinoHome = () => {
    window.location.href = '/bovinos';
  };

  const redirectToVacinaHome = () => {
    window.location.href = '/vacinas';
  };

  const redirectToPessoaHome = () => {
    window.location.href = '/pessoas';
  };

  const redirectToFazendaHome = () => {
    window.location.href = '/fazendas';
  };

  const redirectToIngredienteHome = () => {
    window.location.href = '/ingredientes';
  };

  const redirectToAlimentacaoHome = () => {
    window.location.href = '/alimentacoes';
  };

  const redirectToDietaHome = () => {
    window.location.href = '/dietas';
  };

  const redirectToDoseHome = () => {
    window.location.href = '/doses';
  };

  if(isAuthenticated()) {
    
  return (
    <Base title={"Administração de Bovinos"}>
      <div>
        <Row>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToPessoaHome}>
                Pessoas
            </button>
          </Col>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToFazendaHome}>Fazendas</button>
          </Col>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToBovinoHome}>
                Bovinos
            </button>
          </Col>
        </Row>
        <Row>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToVacinaHome}>
                Vacinas
            </button>
          </Col>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToDoseHome}>
                Doses
            </button>
          </Col>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToAlimentacaoHome}>
                Alimentações
            </button>
          </Col>
        </Row>
        <Row>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToDietaHome}>
                Dietas
            </button>
          </Col>
          <Col size={3}>
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
              onClick={redirectToIngredienteHome}>
                Ingredientes
            </button>
          </Col>
        </Row>       
      </div>
    </Base>
  );
} 
};

export default Inicio;
