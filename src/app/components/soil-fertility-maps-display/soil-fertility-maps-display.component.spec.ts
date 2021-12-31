import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilFertilityMapsDisplayComponent } from './soil-fertility-maps-display.component';

describe('SoilFertilityMapsDisplayComponent', () => {
  let component: SoilFertilityMapsDisplayComponent;
  let fixture: ComponentFixture<SoilFertilityMapsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilFertilityMapsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilFertilityMapsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
