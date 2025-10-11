import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss',
})
export class CreditComponent {
  private readonly _router = inject(Router);
  private readonly _activeRouter = inject(ActivatedRoute);

  redirectToDebit() {
    this._router.navigate(['../debit'], { relativeTo: this._activeRouter });
  }
}
