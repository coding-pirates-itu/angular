import { Component, inject } from '@angular/core';
import { BrickSelectionService } from '../services/brick-selection.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectionService = inject(BrickSelectionService);
}
