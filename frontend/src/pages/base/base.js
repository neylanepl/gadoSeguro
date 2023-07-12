import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import MenuLogin from '../../components/menuLogin';

const Base = ({children, title}) => {
    return(
        <div style={{ background: "#F0F1DF", paddingBottom: "5%", minHeight: "100vh" }}>
            {title == "Login" ? <MenuLogin /> : <Menu /> }  
            <h1 className="text-center" style={{ background: "#E0E7CA", padding: "20px", marginBottom: "5%" }}>{title}</h1>
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default Base;