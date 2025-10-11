import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly _router = inject(Router);

  navigateToCards() {
    this._router.navigate(['cards']);
  }
  navigateToInformations() {
    this._router.navigate(['informations'], {
      queryParams: { nome: 'Maria', idade: 30 },
    });
  }
  navigateToContatos() {
    this._router.navigate(['contacts']);
  }
  navigateToInitial() {
    this._router.navigate(['initial'], {
      queryParams: { isActive: true, isAdmin: false },
    });
  }
}
