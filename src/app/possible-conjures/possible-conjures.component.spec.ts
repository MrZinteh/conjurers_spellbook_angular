import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleConjuresComponent } from './possible-conjures.component';

describe('PossibleConjuresComponent', () => {
  let component: PossibleConjuresComponent;
  let fixture: ComponentFixture<PossibleConjuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleConjuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleConjuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
