import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  private readonly _router = inject(Router);
  private readonly _activeRouter = inject(ActivatedRoute);

  redirectToCredit() {
    this._router.navigate(['credit'], { relativeTo: this._activeRouter });
  }
  redirectToBebit() {
    this._router.navigate(['debit'], { relativeTo: this._activeRouter });
  }
}
