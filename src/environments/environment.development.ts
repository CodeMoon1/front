export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080', // Endereço direto do seu backend
  endpoints: {
    'veiculo': '/busca/listaPlaca',
    'cpf':     '/busca/listaCpf',
    'cnpj':    '/busca/listaCnpj',
    'imovel':  '/busca/listaImovel',
    'telefone':'/busca/listaTelefone',
    'email':   '/busca/listaEmail',
    'reports': '/listar/reports'
  } as Record<string, string>
};
