import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernalCallingComponent } from './infernal-calling.component';

describe('InfernalCallingComponent', () => {
  let component: InfernalCallingComponent;
  let fixture: ComponentFixture<InfernalCallingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfernalCallingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfernalCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
