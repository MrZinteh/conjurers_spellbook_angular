import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjureMinorElementalsComponent } from './conjure-minor-elementals.component';

describe('ConjureMinorElementalsComponent', () => {
  let component: ConjureMinorElementalsComponent;
  let fixture: ComponentFixture<ConjureMinorElementalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjureMinorElementalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjureMinorElementalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
