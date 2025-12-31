import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  image: string;
  readTime: number;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  searchQuery = '';
  selectedCategory = 'todos';

  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Como Maximizar o Potencial dos Seus Dados',
      excerpt: 'Descubra as melhores práticas para transformar dados brutos em insights estratégicos.',
      content: '<h2>Introdução</h2><p>Os dados são o novo ouro da era digital...</p>',
      author: 'João Silva',
      date: new Date('2025-12-20'),
      category: 'estratégia',
      image: 'https://via.placeholder.com/400x200?text=Estrategia',
      readTime: 5
    },
    {
      id: 2,
      title: 'Segurança de Dados: O Que Você Precisa Saber',
      excerpt: 'Entenda como proteger suas informações sensíveis com as melhores práticas de segurança.',
      content: '<h2>Por que Segurança é Crítica</h2><p>Em um mundo onde os dados são cada vez mais valiosos...</p>',
      author: 'Maria Santos',
      date: new Date('2025-12-15'),
      category: 'segurança',
      image: 'https://via.placeholder.com/400x200?text=Seguranca',
      readTime: 7
    },
    {
      id: 3,
      title: 'Inteligência Artificial e Análise de Dados',
      excerpt: 'Como a IA está revolucionando o processamento e análise de grandes volumes de dados.',
      content: '<h2>A Revolução da IA</h2><p>A inteligência artificial está transformando a forma como analisamos dados...</p>',
      author: 'Carlos Oliveira',
      date: new Date('2025-12-10'),
      category: 'tecnologia',
      image: 'https://via.placeholder.com/400x200?text=IA',
      readTime: 8
    },
    {
      id: 4,
      title: 'LGPD: Conformidade e Boas Práticas',
      excerpt: 'Guia completo sobre como sua empresa pode estar em conformidade com a Lei Geral de Proteção de Dados.',
      content: '<h2>O que é LGPD?</h2><p>A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira...</p>',
      author: 'Ana Costa',
      date: new Date('2025-12-05'),
      category: 'conformidade',
      image: 'https://via.placeholder.com/400x200?text=LGPD',
      readTime: 6
    },
    {
      id: 5,
      title: 'Otimizando Consultas: Dicas e Truques',
      excerpt: 'Aprenda técnicas avançadas para otimizar suas consultas e obter resultados mais rápidos.',
      content: '<h2>Por que Otimizar Consultas?</h2><p>Consultas otimizadas economizam tempo, recursos e dinheiro...</p>',
      author: 'Pedro Alves',
      date: new Date('2025-11-30'),
      category: 'tutorial',
      image: 'https://via.placeholder.com/400x200?text=Otimizacao',
      readTime: 9
    },
    {
      id: 6,
      title: 'Casos de Sucesso: Transformação Digital',
      excerpt: 'Conheça histórias reais de empresas que transformaram seus negócios com dados.',
      content: '<h2>Transformação Digital com Dados</h2><p>Muitas empresas têm conseguido transformar seus negócios...</p>',
      author: 'Lucia Ferreira',
      date: new Date('2025-11-25'),
      category: 'casos-de-sucesso',
      image: 'https://via.placeholder.com/400x200?text=Casos',
      readTime: 5
    }
  ];

  get categories(): string[] {
    const cats = new Set(this.posts.map(p => p.category));
    return ['todos', ...Array.from(cats)];
  }

  get filteredPosts(): BlogPost[] {
    return this.posts.filter(post => {
      const matchCategory = this.selectedCategory === 'todos' || post.category === this.selectedCategory;
      const matchSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  trackByPostId(index: number, post: BlogPost): number {
    return post.id;
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }
}
