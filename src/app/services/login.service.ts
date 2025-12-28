import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
// 1. Importe o environment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
} )
export class LoginService {
  // 2. Use o apiBaseUrl do environment e adicione o sufixo /auth
  private apiUrl: string = `${environment.apiBaseUrl}/auth`;

  constructor(private httpClient: HttpClient ) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, { email, password } ).pipe(
      tap((value) => this.saveSession(value))
    );
  }

  signup(name: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/register`, { name, email, password } ).pipe(
      tap((value) => this.saveSession(value))
    );
  }

  // 3. Método privado para evitar repetição de código (Clean Code)
  private saveSession(value: LoginResponse) {
    sessionStorage.setItem("auth-token", value.token);
    sessionStorage.setItem("username", value.name);
  }
}
