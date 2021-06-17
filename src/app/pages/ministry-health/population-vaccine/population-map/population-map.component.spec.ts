import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationMapComponent } from './population-map.component';

describe('PopulationMapComponent', () => {
  let component: PopulationMapComponent;
  let fixture: ComponentFixture<PopulationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
