import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilFertilityMapsComponent } from './soil-fertility-maps.component';

describe('SoilFertilityMapsComponent', () => {
  let component: SoilFertilityMapsComponent;
  let fixture: ComponentFixture<SoilFertilityMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilFertilityMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilFertilityMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
