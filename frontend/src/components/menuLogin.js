import React from 'react';

const MenuLogin = () => {
    const handleLogout = () => {
        // Lógica para realizar o logout
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div 
            style={{ backgroundColor: '#83A93A', width: '100%', 
            height: '40px', position: 'relative' }}>
        </div>
    );
};

export default MenuLogin;
