import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyInfo = {
    img: 'svg/logo-white.svg',
    description: 'Transformando dados em insights estratégicos para o seu negócio.'
  };

  footerSections: FooterSection[] = [
    {
      title: 'Produto',
      links: [
        { label: 'Recursos', path: '/faq' },
        { label: 'Preços', path: '/faq' },
        { label: 'Segurança', path: '/faq' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contato', path: '/faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidade', path: '/privacy-policy' },
        { label: 'Termos', path: '/privacy-policy' },
        { label: 'FAQ', path: '/faq' }
      ]
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'GitHub', url: 'https://github.com', icon: 'github' }
  ];

 
  trackBySection(index: number, section: FooterSection): string {
    return section.title;
  }

  // ✅ TrackBy para links do footer
  trackByLink(index: number, link: FooterLink): string {
    return link.path;
  }

  // ✅ TrackBy para redes sociais
  trackBySocialLink(index: number, social: SocialLink): string {
    return social.name;
  }
}
