import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss',
})
export class SegundoComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Componente segundo carregado! ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Componente segundo destruído!');
  }
}
