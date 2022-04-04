import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonElementalComponent } from './summon-elemental.component';

describe('SummonElementalComponent', () => {
  let component: SummonElementalComponent;
  let fixture: ComponentFixture<SummonElementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonElementalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
