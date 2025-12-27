import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConsultaSelectorComponent } from '../../components/consulta-selector/consulta-selector.component';
import { DataProcessingService } from '../../services/data-processing.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, UpperCasePipe, ConsultaSelectorComponent],
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

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file || !this.selectedService) return;
    this.isProcessing = true;
    try {
      this.jsonData = await this.dataService.processExcelFile(file, this.selectedService);
    } catch (error) { alert(error); }
    finally { this.isProcessing = false; }
  }

  enviarConsulta() {
    if (!this.selectedService || !this.jsonData) return;
    this.dataService.sendDataToBackend(this.selectedService, this.jsonData).subscribe({
      next: () => { alert('Sucesso!'); this.selectedService = null; this.jsonData = null; },
      error: () => alert('Erro ao enviar.')
    });
  }
}
