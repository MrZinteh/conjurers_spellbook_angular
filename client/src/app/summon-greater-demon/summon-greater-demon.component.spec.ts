import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonGreaterDemonComponent } from './summon-greater-demon.component';

describe('SummonGreaterDemonComponent', () => {
  let component: SummonGreaterDemonComponent;
  let fixture: ComponentFixture<SummonGreaterDemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonGreaterDemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonGreaterDemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
