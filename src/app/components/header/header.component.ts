// src/app/components/header/header.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 👈 Importe RouterLink e RouterLinkActive

// Interface para definir a estrutura de um item do menu
export interface NavItem {
  label: string; // O texto que será exibido (ex: "Home")
  path: string;  // A rota para a qual o link aponta (ex: "/home")
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,       
    RouterLinkActive  
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  navItems: NavItem[] = [
    { label: 'Inicio', path: '/about' },
    { label: 'Política de Privacidade', path: '/privacy-policy' }, 
    { label: 'Blog', path: '/blog-detail'},
    { label: 'Consultar', path: '/consulta'},
    { label: 'Historico De Consultas', path: '/report'},
  ];

  // Propriedade para controlar a visibilidade do menu em telas móveis
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
