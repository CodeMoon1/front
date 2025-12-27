import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
} )
export class DataProcessingService {
  
  // Mapeamento de endpoints para manter a segurança e organização
  // No futuro, você pode mover isso para um arquivo de configuração ou environment
  private readonly endpoints: Record<string, string> = {
    'veiculo': '/api/busca/listaPlaca',
    'cpf':     '/api/busca/listaCpf',
    'cnpj':    '/api/busca/listaCnpj',
    'imovel':  '/api/busca/listaImovel',
    'telefone':'/api/busca/listaTelefone',
    'email':   '/api/busca/listaEmail'
  };

  constructor(private http: HttpClient ) {}

  /**
   * Lê o arquivo Excel e extrai a primeira coluna de forma inteligente
   */
  async processExcelFile(file: File, serviceType: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          
          // Converte para matriz (array de arrays)
          const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          
          // Extração Inteligente: Pega apenas a primeira coluna, ignora cabeçalho e limpa vazios
          const payload = rows.slice(1)
            .map(row => row[0])
            .filter(value => value !== undefined && value !== null && value !== '')
            .map(item => ({
              tipo: serviceType,
              valor: item.toString().trim()
            }));

          resolve(payload);
        } catch (error) {
          reject('Erro ao processar a estrutura do arquivo Excel.');
        }
      };

      reader.onerror = () => reject('Erro ao ler o arquivo físico.');
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Envia os dados para o backend usando o endpoint específico do serviço
   */
  sendDataToBackend(serviceType: string, payload: any[]): Observable<any> {
    const url = this.endpoints[serviceType];
    
    if (!url) {
      throw new Error(`Endpoint não configurado para o serviço: ${serviceType}`);
    }

    // Enviamos para a URL mapeada. 
    // Dica: O prefixo '/api' pode ser configurado no proxy do Angular para esconder o localhost:8080
    return this.http.post(url, { data: payload } );
  }
}
