import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interface para definir a estrutura de uma seção do footer
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Interface para definir um link do footer
export interface FooterLink {
  label: string;
  path: string;
  external?: boolean; // Para links externos (abrem em nova aba)
}

// Interface para redes sociais
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Nome do ícone ou classe CSS
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Ano atual para o copyright
  currentYear = new Date().getFullYear();

  // Seções de links do footer
  footerSections: FooterSection[] = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', path: '/about' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Consulta', path: '/consulta' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'FAQ', path: '/faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', path: '/privacy-policy'},
        { label: 'Termos de Uso', path: '/privacy-policy'},
        { label: 'Compartilhamento dos dados', path: '/privacy-policy'},
        { label: 'LGPD', path: '/privacy-policy'}
      ]
    }
  ];

  
  socialLinks: SocialLink[] = [
    { name: 'Instagram', url: 'https://www.instagram.com/oceanodosdados/#', icon: 'instagram' }
  ];

  
  companyInfo = {
    img: '/svg/logo-white.svg',
    description: 'Transformando dados em insights valiosos para o seu negócio.',
    email: 'contato@oceanodados.com.br',
    phone: '+55 (11) 9999-9999',
    address: 'Minas Gerais, MG - Brasil'
  };

  // Método para retornar ícones das redes sociais (usando emojis como fallback)
  getSocialIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      'instagram': '📷',
    };
    return icons[iconName] || '🔗';
  }
}
