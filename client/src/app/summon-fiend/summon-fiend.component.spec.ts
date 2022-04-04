import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonFiendComponent } from './summon-fiend.component';

describe('SummonFiendComponent', () => {
  let component: SummonFiendComponent;
  let fixture: ComponentFixture<SummonFiendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonFiendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonFiendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
