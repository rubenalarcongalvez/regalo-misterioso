import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dedicatoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dedicatoria.component.html',
  styleUrl: './dedicatoria.component.css',
})
export class DedicatoriaComponent {
  @Input() nombre: string = '';
  @Input() texto: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maxime incidunt impedit facilis nemo rem nobis, rerum omnis voluptates quisquam ipsum accusantium perspiciatis laboriosam nulla veritatis? Iste qui in sint!';
  @Input() color: string = 'bg-pink-200';
  @Input() originalPerro: string = '';
  @Input() traduccion: string = '';
  palabrasPerro: string[] = ['guf', 'guau', 'wooooof', 'guauguauwoof'];

  ngOnInit() {
    if (this.traduccion) {
      let contador = 0;

      for (let i = 0; i < this.traduccion.length; i++) {
        if (this.traduccion[i] == ' ') {
          if (this.originalPerro.length > 0) {
            this.originalPerro += ' ';
          }

          if (contador <= 3) {
            this.originalPerro += this.palabrasPerro[0];
          } else if (contador > 3 && contador <= 6) {
            this.originalPerro += this.palabrasPerro[1];
          } else if (contador > 6 && contador <= 8) {
            this.originalPerro += this.palabrasPerro[2];
          } else {
            this.originalPerro += this.palabrasPerro[3];
          }

          contador = 0;
        }
        contador++;
      }

      this.originalPerro += '. 🐾';
      this.texto = this.originalPerro;
    }
  }

  traducirPerro() {
    if (this.texto == this.originalPerro) {
      this.texto = this.traduccion;
    } else {
      this.texto = this.originalPerro;
    }
  }
}
