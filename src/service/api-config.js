import { Usuario } from '../entities/class/usuario';
import httpsInstance from './url';

export const useUsuario = () => {
    const https = httpsInstance()

    const login = async (cpf, senha) => {
        return https.post("/login", { cpf, senha });
    };


    return {
        login,
    }
}