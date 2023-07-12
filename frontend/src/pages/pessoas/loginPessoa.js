import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/login.css';
import MenuLogin from '../../components/menuLogin';
import { login } from '../../services/auth';
import gadoSeguro from '../../services/connectionGadoSeguro';

const Login = () => {

    const [loginForm, setLoginForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            email: loginForm,
            senha: senhaForm
        };

        try {
            const { data } = await gadoSeguro.post('/login', payload);
            login(data.token, data.role);
            console.log("Login válido!");
            navigate('/inicio/inicio');

        } catch (error) {
            console.log("Email ou senha inválido!", error);
        }


    };

    return (
        <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
            <MenuLogin />
            <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Login </h1>


            <div className="formularioLogin" style={{ marginBottom: "10%" }}>
                <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
                    <div className="sub-div">
                        <div className="id_"><p>Usuário</p></div>
                        <input type="text" className="nomePessoa" required onChange={e => setLoginForm(e.target.value)} />

                        <div className="id_"><p>Senha</p></div>
                        <input type="password" className="senhaPessoa" required onChange={e => setSenhaForm(e.target.value)} />

                        <button type="submit" value="submit" className="botaoCadastrar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px 0 20px 0" }} variant="warning"  >Entrar</button>

                        <button className="botaoCadastrarS btn btn-success" style={{ color: "#dedede", backgroundColor: "#6D3B00", borderColor: "#6D3B00", marginBottom: "5%" }} variant="warning" onClick={e => navigate('/pessoas/cadastrarPessoas')}>Cadastre-se</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login;   