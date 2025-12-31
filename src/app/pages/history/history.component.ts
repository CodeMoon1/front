import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReportService } from '../../services/report.service';
import { Report } from '../../types/report.type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  reports: Report[] = [];
  isLoading: boolean = true;

  constructor(
    private reportService: ReportService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.isLoading = true;
    console.log('Iniciando busca de relatórios...');
    this.reportService.getReports().subscribe({
      next: (data) => {
        console.log('Dados recebidos do backend:', data);
        this.reports = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar histórico:', err);
        this.isLoading = false;
        Swal.fire('Erro!', 'Não foi possível carregar seu histórico de relatórios.', 'error');
      }
    });
  }

  openReport(url: string) {
    if (url && url !== 'Null' && url !== '#') {
      window.open(url, '_blank');
    } else {
      Swal.fire('Aguarde', 'Este relatório ainda está sendo processado ou falhou.', 'info');
    }
  }
}
