import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonFeyComponent } from './summon-fey.component';

describe('SummonFeyComponent', () => {
  let component: SummonFeyComponent;
  let fixture: ComponentFixture<SummonFeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonFeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonFeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
