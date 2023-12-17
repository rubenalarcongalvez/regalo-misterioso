import {
  AfterRenderOptions,
  AfterRenderPhase,
  Component,
  afterRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, RouterLink, RouterOutlet } from '@angular/router';
import { GlobalService } from './page/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  contador = 0;
  started: boolean = false;

  constructor(private globalService: GlobalService) {
    afterRender(() => {
      if (this.started == false) {
        this.started = true;

        this.globalService.intervalo = setInterval(() => {
          if(document.title == 'Regalo Misterioso') {
            document.title = 'Mystery Gift';
          } else {
            document.title = 'Regalo Misterioso';
          }
        }, 2000);
      }
    });
  }
}
