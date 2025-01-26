import { TestBed } from '@angular/core/testing';

import { BrickSelectionService } from './brick-selection.service';

describe('SingleSelectionService', () => {
  let service: BrickSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrickSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
