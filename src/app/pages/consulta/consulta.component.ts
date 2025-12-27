import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConsultaSelectorComponent } from '../../components/consulta-selector/consulta-selector.component';
import * as XLSX from 'xlsx'; // Você precisará instalar: npm install xlsx
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-consulta',
  standalone: true,
  // 2. Adicione o ConsultaSelectorComponent neste array de imports
  imports: [
    HeaderComponent, 
    FooterComponent, 
    UpperCasePipe,
    ConsultaSelectorComponent // <--- Adicione esta linha
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  selectedService: string | null = null;
  jsonData: any = null;

  handleSelection(type: string) {
    this.selectedService = type;
    this.jsonData = null; // Reseta ao mudar de serviço
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Converte para JSON
        this.jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log('Dados convertidos para JSON:', this.jsonData);
        
        // Aqui você enviaria o this.jsonData para o seu backend
      };
      reader.readAsArrayBuffer(file);
    }
  }
}
