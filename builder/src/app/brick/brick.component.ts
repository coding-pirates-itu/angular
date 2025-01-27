import { Component, input } from '@angular/core';

@Component({
  selector: 'brick',
  imports: [],
  templateUrl: './brick.component.html',
  styleUrl: './brick.component.css'
})
export class BrickComponent {
  face = input<string>();
}
