import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

interface RelatedPost {
  id: number;
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  relatedPosts: RelatedPost[] = [];
  allPosts: BlogPost[] = [];
  postId: number | null = null;
  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllPosts();
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      if (this.postId) {
        this.loadPost(this.postId);
      }
    });
  }

  loadAllPosts(): void {
    this.allPosts = [
      {
        id: 1,
        title: 'Como Maximizar o Potencial dos Seus Dados',
        excerpt: 'Descubra as melhores práticas para transformar dados brutos em insights estratégicos.',
        content: `
          <h2>Introdução</h2>
          <p>Os dados são o novo ouro da era digital. Empresas que conseguem extrair valor de seus dados têm uma vantagem competitiva significativa. Neste artigo, exploraremos as melhores práticas para maximizar o potencial dos seus dados.</p>

          <h2>1. Qualidade dos Dados</h2>
          <p>O primeiro passo é garantir que seus dados sejam de alta qualidade. Dados imprecisos ou incompletos podem levar a insights incorretos e decisões ruins. Invista em processos de limpeza e validação de dados.</p>

          <h3>Dicas Práticas:</h3>
          <ul>
            <li>Implemente validações automáticas</li>
            <li>Realize auditorias regulares</li>
            <li>Mantenha um dicionário de dados atualizado</li>
          </ul>

          <h2>2. Armazenamento Eficiente</h2>
          <p>Escolha a infraestrutura certa para armazenar seus dados. Considere fatores como volume, velocidade de acesso e custo.</p>

          <h2>3. Análise e Visualização</h2>
          <p>Use ferramentas de visualização para transformar dados em insights compreensíveis. Gráficos e dashboards facilitam a comunicação de resultados.</p>

          <h2>Conclusão</h2>
          <p>Maximizar o potencial dos seus dados requer uma abordagem holística que envolva qualidade, armazenamento eficiente e análise cuidadosa. Comece hoje mesmo a implementar essas práticas em sua organização.</p>
        `,
        author: 'João Silva',
        date: new Date('2025-12-20'),
        category: 'estratégia',
        image: 'https://via.placeholder.com/1200x600?text=Dados+Estrategicos',
        readTime: 5
      },
      {
        id: 2,
        title: 'Segurança de Dados: O Que Você Precisa Saber',
        excerpt: 'Entenda como proteger suas informações sensíveis com as melhores práticas de segurança.',
        content: `
          <h2>Por que Segurança de Dados é Crítica</h2>
          <p>Em um mundo onde os dados são cada vez mais valiosos, a segurança é fundamental. Ataques cibernéticos podem resultar em perda de dados, danos à reputação e consequências legais.</p>

          <h2>Princípios Fundamentais</h2>
          <p>A segurança de dados é baseada em três princípios fundamentais: confidencialidade, integridade e disponibilidade.</p>

          <h2>Melhores Práticas</h2>
          <p>Implemente criptografia, controle de acesso, autenticação multifator e auditorias regulares.</p>

          <h2>Conformidade com LGPD</h2>
          <p>No Brasil, a Lei Geral de Proteção de Dados (LGPD) estabelece requisitos rigorosos para o tratamento de dados pessoais.</p>
        `,
        author: 'Maria Santos',
        date: new Date('2025-12-15'),
        category: 'segurança',
        image: 'https://via.placeholder.com/1200x600?text=Seguranca',
        readTime: 7
      },
      {
        id: 3,
        title: 'Inteligência Artificial e Análise de Dados',
        excerpt: 'Como a IA está revolucionando o processamento e análise de grandes volumes de dados.',
        content: `
          <h2>A Revolução da IA</h2>
          <p>A inteligência artificial está transformando a forma como analisamos dados. Machine learning e deep learning permitem descobrir padrões complexos que seriam impossíveis de detectar manualmente.</p>

          <h2>Aplicações Práticas</h2>
          <p>Desde previsão de demanda até detecção de fraudes, a IA tem aplicações práticas em praticamente todos os setores.</p>

          <h2>Desafios</h2>
          <p>Apesar do potencial, existem desafios como a necessidade de grandes volumes de dados de qualidade, poder computacional e expertise técnica.</p>
        `,
        author: 'Carlos Oliveira',
        date: new Date('2025-12-10'),
        category: 'tecnologia',
        image: 'https://via.placeholder.com/1200x600?text=IA+Dados',
        readTime: 8
      },
      {
        id: 4,
        title: 'LGPD: Conformidade e Boas Práticas',
        excerpt: 'Guia completo sobre como sua empresa pode estar em conformidade com a Lei Geral de Proteção de Dados.',
        content: `
          <h2>O que é LGPD?</h2>
          <p>A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regulamenta o tratamento de dados pessoais.</p>

          <h2>Princípios da LGPD</h2>
          <p>A LGPD é baseada em princípios como finalidade, necessidade, transparência e segurança.</p>

          <h2>Direitos do Titular</h2>
          <p>Os titulares de dados têm direitos como acesso, correção, exclusão e portabilidade de seus dados.</p>

          <h2>Implementação</h2>
          <p>Para estar em conformidade, sua empresa deve manter registros de processamento, implementar medidas de segurança e estar preparada para responder a solicitações dos titulares.</p>
        `,
        author: 'Ana Costa',
        date: new Date('2025-12-05'),
        category: 'conformidade',
        image: 'https://via.placeholder.com/1200x600?text=LGPD',
        readTime: 6
      },
      {
        id: 5,
        title: 'Otimizando Consultas: Dicas e Truques',
        excerpt: 'Aprenda técnicas avançadas para otimizar suas consultas e obter resultados mais rápidos.',
        content: `
          <h2>Por que Otimizar Consultas?</h2>
          <p>Consultas otimizadas economizam tempo, recursos e dinheiro. Elas também melhoram a experiência do usuário.</p>

          <h2>Técnicas de Otimização</h2>
          <p>Índices, caching, particionamento e query optimization são algumas das técnicas mais eficazes.</p>

          <h2>Ferramentas</h2>
          <p>Use ferramentas de análise de performance para identificar gargalos e oportunidades de melhoria.</p>
        `,
        author: 'Pedro Alves',
        date: new Date('2025-11-30'),
        category: 'tutorial',
        image: 'https://via.placeholder.com/1200x600?text=Otimizacao',
        readTime: 9
      },
      {
        id: 6,
        title: 'Casos de Sucesso: Transformação Digital',
        excerpt: 'Conheça histórias reais de empresas que transformaram seus negócios com dados.',
        content: `
          <h2>Transformação Digital com Dados</h2>
          <p>Muitas empresas têm conseguido transformar seus negócios através de uma estratégia de dados bem planejada.</p>

          <h2>Caso 1: Varejo</h2>
          <p>Uma grande rede de varejo usou análise de dados para otimizar seu estoque, reduzindo custos em 20%.</p>

          <h2>Caso 2: Saúde</h2>
          <p>Um hospital implementou um sistema de análise de dados para melhorar o atendimento ao paciente.</p>

          <h2>Lições Aprendidas</h2>
          <p>O sucesso requer comprometimento, investimento e uma cultura orientada a dados.</p>
        `,
        author: 'Lucia Ferreira',
        date: new Date('2025-11-25'),
        category: 'casos-de-sucesso',
        image: 'https://via.placeholder.com/1200x600?text=Casos+Sucesso',
        readTime: 5
      }
    ];
  }

  loadPost(id: number): void {
    this.loading = true;
    setTimeout(() => {
      const foundPost = this.allPosts.find(p => p.id === id);
      if (foundPost) {
        this.post = foundPost;
        this.loadRelatedPosts();
        this.notFound = false;
      } else {
        this.notFound = true;
      }
      this.loading = false;
    }, 300);
  }

  loadRelatedPosts(): void {
    if (!this.post) return;

    this.relatedPosts = this.allPosts
      .filter(p => p.category === this.post?.category && p.id !== this.post?.id)
      .slice(0, 3)
      .map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        image: p.image
      }));
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  goToPost(id: number): void {
    this.router.navigate(['/blog', id]);
    window.scrollTo(0, 0);
  }
}
