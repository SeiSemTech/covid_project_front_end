import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineLotsComponent } from './vaccine-lots.component';

describe('VaccineLotsComponent', () => {
  let component: VaccineLotsComponent;
  let fixture: ComponentFixture<VaccineLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
