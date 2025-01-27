import { Component, inject, input } from '@angular/core';
import { BrickSelectionService } from '../services/brick-selection.service';
import { BrickComponent } from "../brick/brick.component";

@Component({
  selector: 'brick-selector',
  imports: [BrickComponent],
  templateUrl: './brick-selector.component.html',
  styleUrl: './brick-selector.component.css'
})
export class BrickSelectorComponent {
  selectedService = inject(BrickSelectionService);
  face = input<string>();
  selected = input<boolean>();

  Select() {
    this.selectedService.select(this.face()!);
  }
}
