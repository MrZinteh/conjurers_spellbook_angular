import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionViewerComponent } from './minion-viewer.component';

describe('MinionViewerComponent', () => {
  let component: MinionViewerComponent;
  let fixture: ComponentFixture<MinionViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinionViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
