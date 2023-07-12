import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import gadoSeguro from '../../services/connectionGadoSeguro';
import Base from '../base/base';
import '../../styles/css/login.css';
import { Form } from 'react-bootstrap';

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
            navigate('/');

        } catch (error) {
            console.log("Email ou senha inválido!", error);
        }


    };

    return (
        <Base title={"Login"}>            
            <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", 
                    maxWidth: "600px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>E-mail</Form.Label>
                    <Form.Control type="email" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setLoginForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSenha">
                    <Form.Label style={{ fontWeight: "bold" }}>Senha</Form.Label>
                    <Form.Control type="password" required 
                        style={{ border: "solid 1.5px #6D3B00" }}
                        onChange={e => setSenhaForm(e.target.value)} />
                </Form.Group>
                <Form.Group className='text-center'>
                    <button 
                        type="submit" value="submit" 
                        className="btn btn-success" 
                        style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "20px 0 20px 0" }}>
                            Entrar
                    </button>
                </Form.Group>
                <Form.Group className='text-center'>
                    <button 
                        className="btn btn-success" 
                        style={{ color: "#dedede", backgroundColor: "#6D3B00", borderColor: "#6D3B00" }} 
                        onClick={e => navigate('/pessoas/cadastrarPessoa')}>
                            Cadastre-se
                    </button>
                </Form.Group>
            </Form>
        </Base>
    );
};


export default Login;   
