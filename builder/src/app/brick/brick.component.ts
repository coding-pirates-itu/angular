import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'brick',
  imports: [],
  templateUrl: './brick.component.html',
  styleUrl: './brick.component.css'
})
export class BrickComponent {
  face = input();
  selected = signal(false);

  Select() {
    this.selected = signal(true);
  }
}
