import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonAberrationComponent } from './summon-aberration.component';

describe('SummonAberrationComponent', () => {
  let component: SummonAberrationComponent;
  let fixture: ComponentFixture<SummonAberrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonAberrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonAberrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
