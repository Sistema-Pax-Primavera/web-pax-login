const mapearDadosUsuario = (data) => {
    const usuario = data?.usuario;
    const nome = data?.nome;
    const senha = data?.senha;
    const local = data?.locale;
    const cpf = data?.cpf;
    const moeda = data?.moeda;

    return {
        usuario,
        nome,
        senha,
        local,
        cpf,
        moeda
    };
}

export default mapearDadosUsuario;