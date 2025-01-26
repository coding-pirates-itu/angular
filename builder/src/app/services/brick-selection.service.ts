import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrickSelectionService {
  brickNames: Array<string> = [
    'soil', 'bush', 'plato', 'pond', 'grass', 'flower'
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
