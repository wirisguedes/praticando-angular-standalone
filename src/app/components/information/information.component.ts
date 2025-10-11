import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  nome: string = '';
  idade: string = '';
  private readonly _activaTeRouter = inject(ActivatedRoute);

  ngOnInit() {
    this.nome = this._activaTeRouter.snapshot.queryParams['nome'];
    this.idade = this._activaTeRouter.snapshot.queryParams['idade'];
  }
}
