import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
// Interface para definir a estrutura de uma pergunta frequente
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  isOpen?: boolean; // Para controlar se a pergunta está expandida ou não
}

// Interface para categorias de FAQ
export interface FaqCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji ou classe de ícone
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule,FooterComponent,HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  // Categorias de FAQ
  categories: FaqCategory[] = [
    {
      id: 'geral',
      name: 'Geral',
      description: 'Perguntas gerais sobre nossos serviços',
      icon: '❓'
    },
    {
      id: 'conta',
      name: 'Conta e Login',
      description: 'Dúvidas sobre criação e gerenciamento de conta',
      icon: '👤'
    },
    {
      id: 'servicos',
      name: 'Serviços',
      description: 'Informações sobre nossos produtos e serviços',
      icon: '⚙️'
    },
    {
      id: 'pagamento',
      name: 'Pagamento',
      description: 'Questões sobre faturamento e pagamentos',
      icon: '💳'
    },
    {
      id: 'suporte',
      name: 'Suporte Técnico',
      description: 'Ajuda com problemas técnicos',
      icon: '🔧'
    }
  ];

  // Lista de perguntas frequentes
  faqItems: FaqItem[] = [
    // Categoria: Geral
    {
      id: 'geral-1',
      category: 'geral',
      question: 'O que é o Oceano dos Dados?',
      answer: 'O Oceano dos Dados é uma plataforma especializada em análise de dados que transforma informações brutas em insights valiosos para o seu negócio. Oferecemos soluções completas de Business Intelligence, análise preditiva e consultoria em dados.',
      isOpen: false
    },
    {
      id: 'geral-2',
      category: 'geral',
      question: 'Quais tipos de empresas podem usar nossos serviços?',
      answer: 'Nossos serviços são adequados para empresas de todos os tamanhos, desde startups até grandes corporações. Atendemos diversos setores como e-commerce, saúde, educação, finanças, varejo e muito mais.',
      isOpen: false
    },
    {
      id: 'geral-3',
      category: 'geral',
      question: 'Como posso entrar em contato com vocês?',
      answer: 'Você pode entrar em contato conosco através do email contato@oceanodados.com.br, pelo telefone +55 (11) 9999-9999, ou através do formulário de contato em nosso site.',
      isOpen: false
    },

    // Categoria: Conta e Login
    {
      id: 'conta-1',
      category: 'conta',
      question: 'Como criar uma conta?',
      answer: 'Para criar uma conta, clique no botão "Cadastrar" no topo da página, preencha seus dados pessoais e empresariais, e confirme seu email. O processo é rápido e seguro.',
      isOpen: false
    },
    {
      id: 'conta-2',
      category: 'conta',
      question: 'Esqueci minha senha, como recuperar?',
      answer: 'Na página de login, clique em "Esqueci minha senha", digite seu email cadastrado e você receberá um link para redefinir sua senha. O link é válido por 24 horas.',
      isOpen: false
    },
    {
      id: 'conta-3',
      category: 'conta',
      question: 'Posso alterar meus dados cadastrais?',
      answer: 'Sim, você pode alterar seus dados a qualquer momento acessando a seção "Meu Perfil" em sua conta. Algumas alterações podem requerer verificação adicional por segurança.',
      isOpen: false
    },

    // Categoria: Serviços
    {
      id: 'servicos-1',
      category: 'servicos',
      question: 'Quais serviços vocês oferecem?',
      answer: 'Oferecemos análise de dados, Business Intelligence, consultoria em dados, desenvolvimento de dashboards personalizados, análise preditiva, e treinamentos em ferramentas de análise.',
      isOpen: false
    },
    {
      id: 'servicos-2',
      category: 'servicos',
      question: 'Quanto tempo leva para implementar uma solução?',
      answer: 'O tempo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 2-4 semanas, enquanto soluções mais complexas podem levar de 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial.',
      isOpen: false
    },
    {
      id: 'servicos-3',
      category: 'servicos',
      question: 'Vocês oferecem suporte após a implementação?',
      answer: 'Sim, oferecemos diferentes planos de suporte pós-implementação, incluindo manutenção, atualizações, treinamento adicional e suporte técnico 24/7 para clientes enterprise.',
      isOpen: false
    },

    // Categoria: Pagamento
    {
      id: 'pagamento-1',
      category: 'pagamento',
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos cartão de crédito, débito, PIX, boleto bancário e transferência bancária. Para clientes corporativos, também oferecemos faturamento mensal.',
      isOpen: false
    },
    {
      id: 'pagamento-2',
      category: 'pagamento',
      question: 'Posso cancelar meu plano a qualquer momento?',
      answer: 'Sim, você pode cancelar seu plano a qualquer momento sem multas. O cancelamento será efetivo no final do período já pago, e você continuará tendo acesso aos serviços até essa data.',
      isOpen: false
    },
    {
      id: 'pagamento-3',
      category: 'pagamento',
      question: 'Vocês oferecem reembolso?',
      answer: 'Oferecemos garantia de 30 dias para novos clientes. Se não ficar satisfeito com nossos serviços nos primeiros 30 dias, oferecemos reembolso integral.',
      isOpen: false
    },

    // Categoria: Suporte Técnico
    {
      id: 'suporte-1',
      category: 'suporte',
      question: 'Como posso obter suporte técnico?',
      answer: 'Você pode abrir um ticket de suporte através da sua conta, enviar um email para suporte@oceanodados.com.br, ou usar o chat ao vivo disponível durante horário comercial.',
      isOpen: false
    },
    {
      id: 'suporte-2',
      category: 'suporte',
      question: 'Qual o horário de funcionamento do suporte?',
      answer: 'Nosso suporte funciona de segunda a sexta-feira, das 8h às 18h (horário de Brasília). Clientes enterprise têm acesso ao suporte 24/7.',
      isOpen: false
    },
    {
      id: 'suporte-3',
      category: 'suporte',
      question: 'Vocês oferecem treinamento para usar as ferramentas?',
      answer: 'Sim, oferecemos treinamentos presenciais e online, documentação completa, vídeos tutoriais e webinars regulares para ajudar você a aproveitar ao máximo nossas soluções.',
      isOpen: false
    }
  ];

  // Categoria atualmente selecionada (para filtrar as perguntas)
  selectedCategory: string = 'todas';

  // Termo de busca
  searchTerm: string = '';

  // Método para alternar a visibilidade de uma pergunta
  toggleFaq(faqId: string): void {
    const faq = this.faqItems.find(item => item.id === faqId);
    if (faq) {
      faq.isOpen = !faq.isOpen;
    }
  }

  // Método para filtrar perguntas por categoria
  filterByCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  // Método para obter perguntas filtradas
  getFilteredFaqs(): FaqItem[] {
    let filtered = this.faqItems;

    // Filtrar por categoria
    if (this.selectedCategory !== 'todas') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory);
    }

    // Filtrar por termo de busca
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }

  // Método para obter o nome da categoria
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Todas';
  }

  // Método para expandir todas as perguntas
  expandAll(): void {
    this.getFilteredFaqs().forEach(faq => faq.isOpen = true);
  }

  // Método para recolher todas as perguntas
  collapseAll(): void {
    this.faqItems.forEach(faq => faq.isOpen = false);
  }
}
