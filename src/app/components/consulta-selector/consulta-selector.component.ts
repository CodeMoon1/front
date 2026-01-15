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
      title: 'Placas',
      description: 'Consulte histórico, multas e restrições através da placa ou RENAVAM.',
      icon: '🚗'
    },
    {
      id: 'cpf',
      title: 'Pessoas Físicas',
      description: 'Busca detalhada de informações cadastrais e vínculos através do CPF.',
      icon: '👤'
    }
  ];

  // Adicione este método abaixo:
  selectOption(id: string) {
    this.onSelect.emit(id);
    console.log(`Opção selecionada: ${id}`);
  }
}
