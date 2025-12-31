import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
  external?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  // ✅ ADICIONE RouterLinkActive AOS IMPORTS
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navItems: NavItem[] = [
    { label: 'Inicio', path: '/about' }, 
    { label: 'Política de Privacidade', path: '/privacy-policy' },
    { label: 'Blog', path: '/blog' }, 
    { label: 'Consultar', path: '/consulta' },
    { label: 'Histórico de Consultas', path: '/history' }
  ];

  // ✅ TrackBy para evitar erro NG0955
  trackByNavItem(index: number, item: NavItem): string {
    return item.path;
  }
}
