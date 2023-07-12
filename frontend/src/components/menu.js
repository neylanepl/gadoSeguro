import React from 'react';

const Menu = () => {
  const handleLogout = () => {
    // Lógica para realizar o logout
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div style={{ backgroundColor: '#83A93A', width: '100%', height: '40px', position: 'relative' }}>
      <button
        style={{
          backgroundColor: '#74a318',
          borderColor: '#6d3b00',
          borderRadius: '4px',
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
        }}
        onClick={handleGoBack}
      >
        Voltar
      </button>
      <button
        style={{
          backgroundColor: '#74a318',
          borderColor: '#6d3b00',
          borderRadius: '4px',
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
        }}
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
};

export default Menu;
