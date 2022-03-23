import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallStatblockComponent } from './small-statblock.component';

describe('SmallStatblockComponent', () => {
  let component: SmallStatblockComponent;
  let fixture: ComponentFixture<SmallStatblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallStatblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallStatblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
