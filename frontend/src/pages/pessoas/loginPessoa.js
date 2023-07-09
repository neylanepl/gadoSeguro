import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/login.css';
import Menu from '../../components/menu';

const Login = () => {

    const [loginForm, setLoginForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            login: loginForm,
            senha: senhaForm
        };

    };

    return (
        <div>
            <Menu />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Login </h1>
            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Usuário</p></div>
                        <input type="text" className="nomePessoa" required onChange={e => setLoginForm(e.target.value)} />

                        <div className="id_"><p>Senha</p></div>
                        <input type="password" className="senhaPessoa" required onChange={e => setSenhaForm(e.target.value)} />

                        <button type="submit" value="submit" className="btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px 0 20px 0" }} variant="warning" onClick={e => navigate('/inicio/inicio')}  >Entrar</button>

                        <button className="btn btn-success" style={{ backgroundColor: "#6D3B00", borderColor: "#6D3B00", marginBottom: "5%" }} variant="warning" onClick={e => navigate('/pessoas/cadastrarPessoas')}>Cadastre-se</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login;