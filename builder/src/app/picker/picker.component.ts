import { Component, inject } from '@angular/core';
import { BrickSelectionService } from '../services/brick-selection.service';
import { BrickSelectorComponent } from "../brick-selector/brick-selector.component";

@Component({
  selector: 'app-picker',
  imports: [BrickSelectorComponent],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.css'
})
export class PickerComponent {
  selectedService = inject(BrickSelectionService);
}
