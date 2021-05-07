import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesShipmentComponent } from './vaccines-shipment.component';

describe('VaccinesShipmentComponent', () => {
  let component: VaccinesShipmentComponent;
  let fixture: ComponentFixture<VaccinesShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinesShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinesShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
