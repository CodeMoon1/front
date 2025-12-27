import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ConsultaOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-consulta-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-selector.component.html',
  styleUrl: './consulta-selector.component.scss'
})
export class ConsultaSelectorComponent {
  @Output() onSelect = new EventEmitter<string>();

  options: ConsultaOption[] = [
    {
      id: 'veiculo',
      title: 'Veículos',
      description: 'Consulte histórico, multas e restrições através da placa ou RENAVAM.',
      icon: '🚗'
    },
    {
      id: 'cpf',
      title: 'Pessoas Físicas',
      description: 'Busca detalhada de informações cadastrais e vínculos através do CPF.',
      icon: '👤'
    },
    {
      id: 'cnpj',
      title: 'Empresas',
      description: 'Análise de dados societários, situação cadastral e débitos via CNPJ.',
      icon: '🏢'
    },
    {
      id: 'imovel',
      title: 'Imóveis',
      description: 'Localização de propriedades e registros cartoriais em todo o território.',
      icon: '🏠'
    },
    {
      id: 'telefone',
      title: 'Telefones',
      description: 'Identificação de titularidade e histórico de números fixos ou móveis.',
      icon: '📞'
    },
    {
      id: 'email',
      title: 'E-mails',
      description: 'Validação e busca de vínculos associados a endereços eletrônicos.',
      icon: '📧'
    }
  ];

  // Adicione este método abaixo:
  selectOption(id: string) {
    this.onSelect.emit(id);
    console.log(`Opção selecionada: ${id}`);
  }
}
