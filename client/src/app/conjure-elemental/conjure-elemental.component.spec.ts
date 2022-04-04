import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjureElementalComponent } from './conjure-elemental.component';

describe('ConjureElementalComponent', () => {
  let component: ConjureElementalComponent;
  let fixture: ComponentFixture<ConjureElementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjureElementalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjureElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
