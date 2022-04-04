import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonShadowspawnComponent } from './summon-shadowspawn.component';

describe('SummonShadowspawnComponent', () => {
  let component: SummonShadowspawnComponent;
  let fixture: ComponentFixture<SummonShadowspawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonShadowspawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonShadowspawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
