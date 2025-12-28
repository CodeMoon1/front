import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../types/report.type';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' } )
export class ReportService {
  // A URL virá do seu environment (ex: http://localhost:8080/reports )
  private apiUrl = `${environment.apiBaseUrl}/reports`;

  constructor(private http: HttpClient ) {}

  // Método que busca a lista de relatórios do backend
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl );
  }
}
