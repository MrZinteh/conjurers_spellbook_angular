import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonDraconicSpiritComponent } from './summon-draconic-spirit.component';

describe('SummonDraconicSpiritComponent', () => {
  let component: SummonDraconicSpiritComponent;
  let fixture: ComponentFixture<SummonDraconicSpiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonDraconicSpiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonDraconicSpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
