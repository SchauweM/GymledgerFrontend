import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteOfTheDayComponent } from './note-of-the-day.component';

describe('NoteOfTheDayComponent', () => {
  let component: NoteOfTheDayComponent;
  let fixture: ComponentFixture<NoteOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
