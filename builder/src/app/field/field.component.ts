import { Component, inject } from '@angular/core';
import { FieldService } from '../services/field.service';
import { BrickComponent } from "../brick/brick.component";
import { BrickSelectionService } from '../services/brick-selection.service';

@Component({
  selector: 'app-field',
  imports: [BrickComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  fieldService = inject(FieldService);
  brickService = inject(BrickSelectionService)

  PutBrick(idx: number) {
    this.fieldService.set(idx, this.brickService.selectedBrick as string);
  }
}
