import { Component, inject } from '@angular/core';
import { BrickComponent } from "../brick/brick.component";
import { BrickSelectionService } from '../services/brick-selection.service';

@Component({
  selector: 'app-picker',
  imports: [BrickComponent],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.css'
})
export class PickerComponent {
  selectedService = inject(BrickSelectionService);
}
