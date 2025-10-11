import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss',
})
export class InitialComponent {
  @Input() isAdmin: string = '';
  @Input() isActive: string = '';
}
