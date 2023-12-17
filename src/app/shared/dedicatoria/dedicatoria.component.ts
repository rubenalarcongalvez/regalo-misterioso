import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dedicatoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dedicatoria.component.html',
  styleUrl: './dedicatoria.component.css'
})
export class DedicatoriaComponent {
  @Input() nombre: string = '';
  @Input() texto: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maxime incidunt impedit facilis nemo rem nobis, rerum omnis voluptates quisquam ipsum accusantium perspiciatis laboriosam nulla veritatis? Iste qui in sint!';
  @Input() color: string = 'bg-pink-200'
}
