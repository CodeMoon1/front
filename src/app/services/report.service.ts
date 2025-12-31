import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../types/report.type';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' } )
export class ReportService {
  private apiUrl = `${environment.apiBaseUrl}${environment.endpoints['reports']}`;

  constructor(private http: HttpClient ) {}

  getReports(): Observable<Report[]> {
    const token = sessionStorage.getItem('auth-token');
    return this.http.get<Report[]>(this.apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    } );
  }
}
