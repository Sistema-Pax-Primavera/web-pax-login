import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Sistema from "../../assets/sistema.png";
import Logo from "../../assets/logo-pax-branco.svg";
import Logo2 from "../../assets/YDRAY-Sistema-Pax-Login.svg";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Switch from '@mui/material/Switch';
import idiomas from "../utils/info";
import packageJson from '../../package.json';
import { useUsuario } from "../service/api-config";
import IconeButtonTable from "../components/button-icon-texto";
import Carregando from "../components/carregando";

const Login = () => {
    const [cpf, setCPF] = useState('');
    const [cpfFormatado, setcpfFormatado] = useState("");
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useUsuario();
    const [idioma, setIdioma] = useState(false);
    const navigate = useNavigate();
    const [acessando, setAcessando] = useState(false);

    const formatCPF = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        setcpfFormatado(formattedValue);
        setCPF(value); // Salvar o valor sem formatação no estado
    };

    const SwitchIdioma = () => {
        setIdioma(!idioma);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        setAcessando(true);
        if (cpf && senha) {
            try {
                const response = await login(cpf, senha);
                const data = response.data;
                if (response.status === 200) {
                    const user = {
                        idioma: data.idioma,
                        permissoes: data.permissoes_globais,
                        usuario: data.usuario,
                        token: data.token,
                        unidades: data.unidades
                    }
                    // Salva as informações do usuário no localStorage
                    localStorage.setItem('usuario', JSON.stringify(user));
                    setAcessando(false);
                    localStorage.setItem('page', '/pax-primavera');
                    navigate('/pax-primavera');
                } else {
                    // Exibe mensagem de erro conforme a resposta da API
                    toast.error(data.error || 'Erro ao efetuar o login.');
                    setAcessando(false);
                }
            } catch (error) {
                toast.error(error.response.data.error);
                setAcessando(false);
            }
        } else {
            toast.warn(idioma ? idiomas.es_PY.toastErro : idiomas.pt_BR.toastErro);
            setAcessando(false);
        }
    };


    return (
        <div className="container-login">
            <div className="container-acesso">
                <h2>{idioma ? idiomas.es_PY.nomeSistema : idiomas.pt_BR.nomeSistema}</h2>
                <div className="cpf-senha">
                    <label>{idioma ? idiomas.es_PY.inputCpf : idiomas.pt_BR.inputCpf}</label>
                    <input
                        type="text"
                        maxLength={11}
                        value={cpfFormatado}
                        onChange={(e) => formatCPF(e.target.value)}
                    />
                </div>
                <div className="cpf-senha2">
                    <label>{idioma ? idiomas.es_PY.inputSenha : idiomas.pt_BR.inputSenha}</label>
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
                {acessando ?
                    <Carregando /> :
                    <IconeButtonTable title="ACESSAR" funcao={handleLogin} icon={<BiArrowFromLeft fontSize={20} />} />
                }

                <div className="idioma">
                    <label>{idioma ? idiomas.es_PY.idioma : idiomas.pt_BR.idioma}</label>
                    <br />
                    <label>{idioma ? idiomas.es_PY.br : idiomas.pt_BR.br}</label>
                    <Switch
                        checked={idioma}
                        onChange={SwitchIdioma}
                        size="small"
                    />
                    <label>{idioma ? idiomas.es_PY.py : idiomas.pt_BR.py}</label>
                </div>
                <div className="logo-versao">
                    <img src={Logo}></img>
                    <label>{idioma ? idiomas.es_PY.versao : idiomas.pt_BR.versao} {packageJson.version}</label>
                </div>
            </div>
            <div className="sistema-img">
                <img src={Sistema}></img>
            </div>
        </div>
    );
};

export default Login;
