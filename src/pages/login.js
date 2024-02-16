import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Sistema from "../../assets/sistema.png";
import Logo from "../../assets/logo-pax-branco.svg";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const [cpf, setCPF] = useState('');
    const [cpfFormatado, setcpfFormatado] = useState("");
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const formatCPF = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        setcpfFormatado(formattedValue);
        setCPF(value); // Salvar o valor sem formatação no estado
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        if (cpf || senha !== '') {
            if (cpf === '00000000000') {
                if (senha === '123789') {
                    toast.success("Bem vindo!");
                    localStorage.setItem("cpf", cpf);
                    localStorage.setItem("usuario", "Administrador");
                    localStorage.setItem("senha", senha);
                    localStorage.setItem("page", '/pax-primavera');
                    navigate("/pax-primavera");
                } else {
                    toast.warn("Senha incorreta!");
                }
            } else {
                toast.warn("Usuário não encontrado!");
            }
        } else {
            toast.error("Preencha todos os campos!");
        }
    };

    return (
        <div className="container-login">
            <div className="container-acesso">
                <h2>
                    Sistema<br /> Pax Primavera
                </h2>
                <div className="cpf-senha">
                    <label>CPF</label>
                    <input
                        type="text"
                        maxLength={11}
                        value={cpfFormatado}
                        onChange={(e) => formatCPF(e.target.value)}
                    />
                </div>
                <div className="cpf-senha2">
                    <label>Senha</label>
                    <div className="mostra-senha">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <div className="toggle-password" onClick={handleTogglePassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                </div>

                <br />
                <button onClick={handleLogin}>ACESSAR <BiArrowFromLeft fontSize={20} /></button>
                <div className="logo-versao">
                    <img src={Logo}></img>
                    <label>Versão 1.0.0</label>
                </div>
            </div>
            <div className="sistema-img">
                <img src={Sistema}></img>
            </div>
        </div>
    );
};

export default Login;
