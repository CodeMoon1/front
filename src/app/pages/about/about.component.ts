import { Component, ElementRef, ViewChild, AfterViewInit, LOCALE_ID } from '@angular/core';
import { registerLocaleData, DecimalPipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AnimatedBackgroundComponent } from '../../components/animated-background/animated-background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

registerLocaleData(localePt);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimatedBackgroundComponent, HeaderComponent, FooterComponent, RouterLink, DecimalPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;
  
  // Objeto para armazenar os valores atuais dos contadores
  counts = {
    database: 0,
    speed: 0,
    accuracy: 0
  };

  // Valores alvo para cada estatística
  private targets = {
    database: 300,
    speed: 5,
    accuracy: 99
  };

  private duration: number = 2000; 
  private animated = false;

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.startAllAnimations();
          this.animated = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.statsSection.nativeElement);
  }

  startAllAnimations() {
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / this.duration, 1);
      
      // Atualiza cada contador baseado no seu alvo
      this.counts.database = Math.floor(progress * this.targets.database);
      this.counts.speed = Math.floor(progress * this.targets.speed);
      this.counts.accuracy = Math.floor(progress * this.targets.accuracy);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
}