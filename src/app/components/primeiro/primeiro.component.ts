import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss',
})
export class PrimeiroComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Componente Primeiro carregado! ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Componente Primeiro destruído!');
  }
}
