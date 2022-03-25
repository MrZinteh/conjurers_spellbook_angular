import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonConstructComponent } from './summon-construct.component';

describe('SummonConstructComponent', () => {
  let component: SummonConstructComponent;
  let fixture: ComponentFixture<SummonConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonConstructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
