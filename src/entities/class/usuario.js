export const Usuario = (data) => ({
    id: data?.id,
    cpf: data?.cpf,
    usuario: data?.usuario,
    senha: data?.senha,
    idioma: data?.idioma,
    token: data?.token,
})