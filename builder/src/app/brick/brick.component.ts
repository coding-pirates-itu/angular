import { Component, inject, input, InputSignal } from '@angular/core';
import { BrickSelectionService } from '../services/brick-selection.service';

@Component({
  selector: 'brick',
  imports: [],
  templateUrl: './brick.component.html',
  styleUrl: './brick.component.css'
})
export class BrickComponent {
  selectedService = inject(BrickSelectionService);
  face = input<string>();
  selected = input<boolean>();

  Select() {
    this.selectedService.select(this.face()!);
  }
}
