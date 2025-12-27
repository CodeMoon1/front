
import { Component } from '@angular/core';
import { AnimatedBackgroundComponent } from '../../components/animated-background/animated-background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimatedBackgroundComponent,HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})


export class AboutComponent {

}
