import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {

}
