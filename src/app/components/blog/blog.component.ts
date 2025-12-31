import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  selectedCategory: string = 'todos';
  searchQuery: string = '';
  categories: string[] = [];

  ngOnInit(): void {
    this.loadPosts();
    this.extractCategories();
  }

  loadPosts(): void {
    this.posts = [
      {
        id: 1,
        title: 'Como Maximizar o Potencial dos Seus Dados',
        excerpt: 'Descubra as melhores práticas para transformar dados brutos em insights estratégicos.',
        content: 'Conteúdo completo do artigo...',
        author: 'João Silva',
        date: new Date('2025-12-20'),
        category: 'estratégia',
        image: 'https://via.placeholder.com/600x400?text=Dados+Estrategicos',
        readTime: 5
      },
      {
        id: 2,
        title: 'Segurança de Dados: O Que Você Precisa Saber',
        excerpt: 'Entenda como proteger suas informações sensíveis com as melhores práticas de segurança.',
        content: 'Conteúdo completo do artigo...',
        author: 'Maria Santos',
        date: new Date('2025-12-15'),
        category: 'segurança',
        image: 'https://via.placeholder.com/600x400?text=Seguranca',
        readTime: 7
      },
      {
        id: 3,
        title: 'Inteligência Artificial e Análise de Dados',
        excerpt: 'Como a IA está revolucionando o processamento e análise de grandes volumes de dados.',
        content: 'Conteúdo completo do artigo...',
        author: 'Carlos Oliveira',
        date: new Date('2025-12-10'),
        category: 'tecnologia',
        image: 'https://via.placeholder.com/600x400?text=IA+Dados',
        readTime: 8
      },
      {
        id: 4,
        title: 'LGPD: Conformidade e Boas Práticas',
        excerpt: 'Guia completo sobre como sua empresa pode estar em conformidade com a Lei Geral de Proteção de Dados.',
        content: 'Conteúdo completo do artigo...',
        author: 'Ana Costa',
        date: new Date('2025-12-05'),
        category: 'conformidade',
        image: 'https://via.placeholder.com/600x400?text=LGPD',
        readTime: 6
      },
      {
        id: 5,
        title: 'Otimizando Consultas: Dicas e Truques',
        excerpt: 'Aprenda técnicas avançadas para otimizar suas consultas e obter resultados mais rápidos.',
        content: 'Conteúdo completo do artigo...',
        author: 'Pedro Alves',
        date: new Date('2025-11-30'),
        category: 'tutorial',
        image: 'https://via.placeholder.com/600x400?text=Otimizacao',
        readTime: 9
      },
      {
        id: 6,
        title: 'Casos de Sucesso: Transformação Digital',
        excerpt: 'Conheça histórias reais de empresas que transformaram seus negócios com dados.',
        content: 'Conteúdo completo do artigo...',
        author: 'Lucia Ferreira',
        date: new Date('2025-11-25'),
        category: 'casos-de-sucesso',
        image: 'https://via.placeholder.com/600x400?text=Casos+Sucesso',
        readTime: 5
      }
    ];

    this.filteredPosts = this.posts;
  }

  extractCategories(): void {
    const uniqueCategories = [...new Set(this.posts.map(post => post.category))];
    this.categories = ['todos', ...uniqueCategories];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchQuery = target.value.toLowerCase();
      this.applyFilters();
    }
  }

  private applyFilters(): void {
    this.filteredPosts = this.posts.filter(post => {
      const matchCategory = this.selectedCategory === 'todos' || post.category === this.selectedCategory;
      const matchSearch = this.searchQuery === '' ||
        post.title.toLowerCase().includes(this.searchQuery) ||
        post.excerpt.toLowerCase().includes(this.searchQuery) ||
        post.author.toLowerCase().includes(this.searchQuery);

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

  trackByCategoryTag(index: number, category: string): string {
    return category;
  }
}
