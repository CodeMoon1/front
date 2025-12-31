import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
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
  imports: [CommonModule, RouterLink, FormsModule,HeaderComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  searchQuery = '';
  selectedCategory = 'todos';

  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Além da Superfície: nem tudo o que importa está visível',
      excerpt: 'Entenda por que a maioria das empresas vê apenas a ponta do iceberg e como o mergulho profundo em dados pode proteger seu negócio.',
      content: '<p>No trabalho de um despachante, muitas decisões são tomadas com base em dados. O problema é que nem sempre o que está visível conta toda a história...</p>',
      author: 'Equipe Oceano de Dados',
      date: new Date('2025-12-31'),
      category: 'estratégia',
      image: 'svg/Mesa de trabajo 1.svg',
      readTime: 4
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
