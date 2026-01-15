export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080', // Endereço direto do seu backend
  endpoints: {
    'veiculo': '/api/v1/placas',
    'cpf':     '/api/v1/cpf',
    'reports': '/api/v1/relatorios'
  } as Record<string, string>
};
