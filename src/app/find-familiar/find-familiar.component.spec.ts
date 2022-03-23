import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFamiliarComponent } from './find-familiar.component';

describe('FindFamiliarComponent', () => {
  let component: FindFamiliarComponent;
  let fixture: ComponentFixture<FindFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
