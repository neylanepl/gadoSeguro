import React from 'react';
import { isAuthenticated } from '../../services/auth';
import { Col, Form, Row } from 'react-bootstrap';
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
      <Form.Group className='text-center' style={{maxWidth: "400px", margin: "0 auto"}}>
        <Row style={{paddingBottom: "5%"}}>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToPessoaHome}>
                Pessoas
            </button>
          </Col>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToFazendaHome}>
                Fazendas
            </button>
          </Col>
        </Row>
        <Row style={{paddingBottom: "5%"}}>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToBovinoHome}>
                Bovinos
            </button>
          </Col>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToVacinaHome}>
                Vacinas
            </button>
          </Col>
        </Row>
        <Row style={{paddingBottom: "5%"}}>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToDoseHome}>
                Doses
            </button>
          </Col>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToAlimentacaoHome}>
                Alimentações
            </button>
          </Col>
        </Row>
        <Row style={{paddingBottom: "5%"}}>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToDietaHome}>
                Dietas
            </button>
          </Col>
          <Col className="d-grid gap-2">
            <button 
              className="btn btn-success" 
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }} 
              onClick={redirectToIngredienteHome}>
                Ingredientes
            </button>
          </Col>
        </Row>       
      </Form.Group>
    </Base>
  );
} 
};

export default Inicio;
