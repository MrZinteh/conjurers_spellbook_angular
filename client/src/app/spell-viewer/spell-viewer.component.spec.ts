import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellViewerComponent } from './spell-viewer.component';

describe('SpellViewerComponent', () => {
  let component: SpellViewerComponent;
  let fixture: ComponentFixture<SpellViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
