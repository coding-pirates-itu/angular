import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickSelectorComponent } from './brick-selector.component';

describe('BrickSelectorComponent', () => {
  let component: BrickSelectorComponent;
  let fixture: ComponentFixture<BrickSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrickSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrickSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
