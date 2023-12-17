import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css'
})
export class GiftComponent {
  clicado: boolean = false;

  constructor(private router: Router) {}

  transicionar() {
    this.clicado = true;

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
  }
}
