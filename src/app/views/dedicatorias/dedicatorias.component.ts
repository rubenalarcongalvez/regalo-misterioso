import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DedicatoriaComponent } from '../../shared/dedicatoria/dedicatoria.component';

@Component({
  selector: 'app-dedicatorias',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DedicatoriaComponent],
  templateUrl: './dedicatorias.component.html',
  styleUrl: './dedicatorias.component.css'
})
export class DedicatoriasComponent {

}
