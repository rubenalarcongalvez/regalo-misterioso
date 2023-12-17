import { Component, afterRender } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from '../../page/global.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private globalService: GlobalService) {
    afterRender(() => {
      clearInterval(this.globalService.intervalo);
      document.title = '¡Un viaje a Londres!';
      let link: HTMLLinkElement = document.querySelector(
        '#iconoWeb'
      ) as HTMLLinkElement;
      if (link) {
        link.href = '/assets/bandera_uk.png';
      }
    });
  }
}
