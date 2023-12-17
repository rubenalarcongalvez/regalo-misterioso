import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-la-experiencia',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './la-experiencia.component.html',
  styleUrl: './la-experiencia.component.css'
})
export class LaExperienciaComponent {

}
