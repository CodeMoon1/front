export const environment = {
  production: false, // Mude para false enquanto estiver testando localmente
  apiBaseUrl: '/api',
  endpoints: {
    'veiculo': '/busca/listaPlaca',
    'cpf':     '/busca/listaCpf',
    'cnpj':    '/busca/listaCnpj',
    'imovel':  '/busca/listaImovel',
    'telefone':'/busca/listaTelefone',
    'email':   '/busca/listaEmail'
  } as Record<string, string>
};
