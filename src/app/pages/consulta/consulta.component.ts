import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConsultaSelectorComponent } from '../../components/consulta-selector/consulta-selector.component';
import { DataProcessingService } from '../../services/data-processing.service'; // Importe o serviço

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    FooterComponent, 
    UpperCasePipe,
    ConsultaSelectorComponent
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  selectedService: string | null = null;
  jsonData: any[] | null = null;
  isProcessing: boolean = false;

  constructor(private dataService: DataProcessingService) {}

  handleSelection(type: string) {
    this.selectedService = type;
    this.jsonData = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Chama o serviço para processar o arquivo de forma inteligente
   */
  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file || !this.selectedService) return;

    this.isProcessing = true;
    try {
      // O serviço cuida de ler apenas a primeira coluna e formatar o JSON
      this.jsonData = await this.dataService.processExcelFile(file, this.selectedService);
      console.log('Dados processados pelo serviço:', this.jsonData);
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar o arquivo Excel. Verifique o formato.');
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Envia os dados para o backend através do serviço
   */
  enviarConsulta() {
    if (!this.selectedService || !this.jsonData) return;

    this.dataService.sendDataToBackend(this.selectedService, this.jsonData).subscribe({
      next: (res) => {
        alert('Consulta enviada com sucesso!');
        this.resetForm();
      },
      error: (err) => {
        console.error('Erro no envio:', err);
        alert('Erro ao conectar com o servidor.');
      }
    });
  }

  private resetForm() {
    this.jsonData = null;
    this.selectedService = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
