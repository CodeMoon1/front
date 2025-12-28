import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router'; // 1. Importe o Router
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConsultaSelectorComponent } from '../../components/consulta-selector/consulta-selector.component';
import { DataProcessingService } from '../../services/data-processing.service';
import Swal from 'sweetalert2';

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

  // 2. Injete o Router no construtor
  constructor(
    private dataService: DataProcessingService,
    private router: Router
  ) {}

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
      
      // Feedback visual opcional ao processar o Excel
      Swal.fire({
        title: 'Arquivo Lido!',
        text: `${this.jsonData.length} registros encontrados. Clique em "Enviar Consulta" para processar.`,
        icon: 'info',
        timer: 3000,
        showConfirmButton: false
      });

    } catch (error) { 
      Swal.fire('Erro!', error as string, 'error'); 
    } finally { 
      this.isProcessing = false; 
    }
  }

  enviarConsulta() {
    if (!this.selectedService || !this.jsonData) return;

    this.dataService.sendDataToBackend(this.selectedService, this.jsonData).subscribe({
      next: () => {
        // 3. Modal de Sucesso Bonito e Informativo
        Swal.fire({
          title: 'Enviado com Sucesso!',
          text: 'Verifique o Status do seu Relatorio na Guia de Relatorio',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#718096',
          confirmButtonText: 'Sim, ver relatórios',
          cancelButtonText: 'Não, fazer outra consulta',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Redireciona para a página de relatórios
            this.router.navigate(['/report']); 
          } else {
            // Limpa a tela para uma nova consulta
            this.selectedService = null;
            this.jsonData = null;
          }
        });
      },
      error: () => {
        Swal.fire('Erro!', 'Não foi possível enviar os dados para o servidor.', 'error');
      }
    });
  }
}
