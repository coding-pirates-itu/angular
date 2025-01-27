import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FieldService {
  sizeX = 8;
  sizeY = 8;
  map: Array<string> = new Array<string>(this.sizeX * this.sizeY);

  constructor() { }

  set(index: number, brick: string) {
    this.map[index] = brick;
  }
}
