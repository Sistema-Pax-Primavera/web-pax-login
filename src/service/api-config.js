import { Usuario } from '../entities/class/usuario';
import httpsInstance from './url';

export const useUsuario = () => {
    const https = httpsInstance()

    const getUsuario = async () =>
        https.get("/a2ece8c2-0dd4-4b57-ab7a-e8f18fbdd36f")
            .then(({ data }) =>
                Usuario(data)
            );

    return {
        getUsuario,
    }
}