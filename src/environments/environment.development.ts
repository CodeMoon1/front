export const environment = {
  production: false,
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
