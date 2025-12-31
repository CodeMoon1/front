import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink,HeaderComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;

  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Além da Superfície: nem tudo o que importa está visível',
      excerpt: 'No mercado de despachantes, confiar apenas no que é visível pode ser um risco. Descubra por que os dados mais importantes estão abaixo da superfície.',
      content: `
        <h2>Nem tudo aparece à primeira vista</h2>
        <p>No trabalho de um despachante, muitas decisões são tomadas com base em dados. O problema é que nem sempre o que está visível conta toda a história. Informações superficiais podem até parecer suficientes, mas deixam de fora detalhes que fazem toda a diferença quando o assunto é segurança, agilidade e confiança.</p>

        <p>É exatamente como um <strong>iceberg</strong>: a parte visível é pequena, enquanto a maior e mais importante estrutura permanece escondida abaixo da superfície.</p>

        <h2>A armadilha da superfície</h2>
        <p>Grande parte das plataformas de consulta entrega apenas o que é rápido de acessar. São dados rasos, desconectados e sem contexto. Eles ajudam, mas não protegem totalmente o seu processo nem o seu cliente.</p>

        <p>Confiar apenas nesse nível de informação é assumir riscos silenciosos — aqueles que não aparecem no primeiro olhar, mas que podem gerar retrabalho, prejuízos e problemas jurídicos.</p>

        <h2>Onde estão os dados que realmente importam</h2>
        <p>A <strong>Oceano de Dados</strong> foi criada para olhar além do óbvio. Nosso foco está na profundidade: históricos mais completos, relações entre dados, padrões de risco e informações que não ficam evidentes em consultas superficiais.</p>

        <p>Enquanto outras soluções permanecem na superfície, nós ajudamos você a mergulhar com segurança e clareza.</p>

        <h2>Por que despachantes precisam enxergar mais fundo</h2>
        <p>No segmento de despachantes, errar custa caro. Cada consulta precisa transmitir confiança, tanto para quem executa quanto para quem contrata o serviço. Quanto mais profundo é o acesso à informação, mais segura é a decisão.</p>

        <p>Com a Oceano de Dados, você deixa de apenas reagir a problemas e passa a antecipá-los, transformando dados em vantagem competitiva.</p>

        <blockquote>
          "O que não está visível pode ser exatamente o que define o resultado."
        </blockquote>

        <h2>Conclusão</h2>
        <p>Ficar na superfície é confortável, mas limitado. Crescer com segurança exige ir além do que os olhos veem. A <strong>Oceano de Dados</strong> existe para revelar o que realmente importa e apoiar despachantes que levam seu trabalho a sério.</p>

        <p>Porque, no fim, nem tudo o que importa está visível.</p>
      `,
      author: 'Equipe Oceano de Dados',
      date: new Date('2025-12-31'),
      category: 'estratégia',
      image: 'svg/Mesa de trabajo 1.svg',
      readTime: 4
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(p => p.id === id) || null;
    window.scrollTo(0, 0);
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  shareOnSocial(platform: string): void {
    if (!this.post) return;
    const url = `${window.location.origin}/blog/${this.post.id}`;
    const text = `Confira: ${this.post.title}`;

    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  }
}
