
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.scss'
})
export class AnimatedBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('animatedCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId!: number;
  private particlesArray: Particle[] = [];
  private numberOfParticles!: number;
  private maxRadius = 3;

  constructor() { }

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    if (this.ctx) {
      this.resizeCanvas();
      this.initParticles();
      this.animate();
      this.canvasRef.nativeElement.addEventListener('mousemove', this.updateParticlesOnMouseMove.bind(this));
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.canvasRef.nativeElement.removeEventListener('mousemove', this.updateParticlesOnMouseMove.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.resizeCanvas();
    this.initParticles();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.setNumberOfParticles();
  }

  private setNumberOfParticles(): void {
    const width = window.innerWidth;
    if (width < 430) {
      this.numberOfParticles = 70;
    } else if (width < 768) {
      this.numberOfParticles = 75;
    } else {
      this.numberOfParticles = 200;
    }
  }

  private initParticles(): void {
    this.particlesArray = [];
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particlesArray.push(new Particle(this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height, this.maxRadius));
    }
  }

  private animate(): void {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.particlesArray.forEach(particle => {
      particle.update(this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
      particle.draw(this.ctx!);
    });
    this.connectParticles();
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  private connectParticles(): void {
    if (!this.ctx) return;

    for (let a = 0; a < this.particlesArray.length; a++) {
      for (let b = a; b < this.particlesArray.length; b++) {
        const distance = Math.hypot(
          this.particlesArray[a].x - this.particlesArray[b].x,
          this.particlesArray[a].y - this.particlesArray[b].y
        );

        if (distance < 150) {
          this.ctx.strokeStyle = `rgba(48, 50, 48, ${1 - distance / 150})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
          this.ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }

  private updateParticlesOnMouseMove(event: MouseEvent): void {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const maxDistance = 150;

    this.particlesArray.forEach(particle => {
      const dx = particle.x - mouseX;
      const dy = particle.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const force = 1 - normalizedDistance;

      if (distance < maxDistance) {
        particle.speedX += (dx / distance) * force * 0.03;
        particle.speedY += (dy / distance) * force * 0.03;
        particle.color = '#EDA201';
      } else {
        particle.color = '#011C40';
      }
    });
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number, maxRadius: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * maxRadius;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = '#011C40';
  }

  update(canvasWidth: number, canvasHeight: number): void {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvasWidth) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > canvasHeight) {
      this.speedY *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

