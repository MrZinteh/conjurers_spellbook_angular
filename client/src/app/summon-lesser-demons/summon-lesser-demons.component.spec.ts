import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonLesserDemonsComponent } from './summon-lesser-demons.component';

describe('SummonLesserDemonsComponent', () => {
  let component: SummonLesserDemonsComponent;
  let fixture: ComponentFixture<SummonLesserDemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonLesserDemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonLesserDemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
