import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationVaccineComponent } from './population-vaccine.component';

describe('PopulationVaccineComponent', () => {
  let component: PopulationVaccineComponent;
  let fixture: ComponentFixture<PopulationVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
