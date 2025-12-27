import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' } )
export class DataProcessingService {
  constructor(private http: HttpClient ) {}

  async processExcelFile(file: File, serviceType: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          const payload = rows.slice(1)
            .map(row => row[0])
            .filter(value => value !== undefined && value !== null && value !== '')
            .map(item => ({
              tipo: serviceType,
              valor: item.toString().trim()
            }));
          resolve(payload);
        } catch (error) { reject('Erro ao processar Excel.'); }
      };
      reader.onerror = () => reject('Erro ao ler arquivo.');
      reader.readAsArrayBuffer(file);
    });
  }

  sendDataToBackend(serviceType: string, payload: any[]): Observable<any> {
  const path = (environment as any).endpoints[serviceType];
  if (!path) throw new Error('Endpoint não configurado.');
  
  const url = `${environment.apiBaseUrl}${path}`;
  
  // Adicionando headers explicitamente para evitar que o Spring barre a requisição
  const headers = { 'Content-Type': 'application/json' };
  
  return this.http.post(url, { data: payload }, { headers } );
}

}
