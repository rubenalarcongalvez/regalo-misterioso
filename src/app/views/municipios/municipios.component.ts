import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SiteComponent } from '../../shared/site/site.component';

@Component({
  selector: 'app-municipios',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SiteComponent],
  templateUrl: './municipios.component.html',
  styleUrl: './municipios.component.css'
})
export class MunicipiosComponent {

}
