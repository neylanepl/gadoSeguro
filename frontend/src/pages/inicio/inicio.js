import React from 'react';
import Menu from '../../components/menu';
import '../../styles/css/inicio.css';

const Inicio = () => {
  const redirectToBovinoHome = () => {
    window.location.href = '/bovinos/bovinoHome';
  };

  const redirectToVacinaHome = () => {
    window.location.href = '/vacinas/vacinaHome';
  };

  const redirectToPessoaHome = () => {
    window.location.href = '/pessoas/pessoaHome';
  };

  const redirectToFazendaHome = () => {
    window.location.href = '/fazendas/fazendaHome';
  };

  return (

    <div id="wrapper" style={{ background: "#F0F1DF" }}>
      <Menu />
      <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Vacinação de Bovinos</h1>

      <div className="container" style={{ background: "#F0F1DF" }}>

        <div className="formulario">

          <button className="botao" type="submit" onClick={redirectToBovinoHome}>Bovinos</button>

          <button className='botao' type='submit' onClick={redirectToVacinaHome}>Vacinas</button>

          <button className='botao' type='submit' onClick={redirectToPessoaHome}>Pessoas</button>

          <button className='botao' type='submit' onClick={redirectToFazendaHome}>Fazenda</button>

        </div>

      </div>
    </div>

  );
};

export default Inicio;
