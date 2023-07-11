import React from 'react';
import Menu from '../components/menu';

const NaoAutenticado = () => {
  return (
    <div id="wrapper" style={{ background: "#F0F1DF" }}>
      <Menu />
      <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}> Realize o login para ter acesso a todas as páginas!</h1>
    </div>
  );
};

export default NaoAutenticado;
