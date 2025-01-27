import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrickSelectionService {
  brickNames: Array<string> = [
    'soil-top-left', 'soil-top', 'soil-top-right', 'soil-left', 'soil', 'soil-right', 'soil-bottom-left', 'soil-bottom', 'soil-bottom-right',
    'bush-top-left', 'meadow-bottom', 'bush-top-right', 'meadow-right', 'bush', 'meadow-left', 'bush-bottom-left', 'meadow-top', 'bush-bottom-right',
    'plato-top-left', 'plato-top', 'plato-top-right', 'plato-left', 'plato', 'plato-right', 'plato-bottom-left', 'plato-bottom', 'plato-bottom-right',
    'pond-top-left', 'pond-top', 'pond-top-right', 'pond-left', 'pond', 'pond-right', 'pond-bottom-left', 'pond-bottom', 'pond-bottom-right',
    'grass', 'flower', 'flowers'
  ];
  isSelected: Map<string, boolean> = new Map();
  selectedBrick: string | undefined; 

  constructor() { }

  select(name: string) {
    this.isSelected.forEach((_v, k, m) => m.set(k, false));
    this.isSelected.set(name, true);
    this.selectedBrick = name;
  };
}
