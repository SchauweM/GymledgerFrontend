import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymnastComponent } from './add-gymnast.component';

describe('AddGymnastComponent', () => {
  let component: AddGymnastComponent;
  let fixture: ComponentFixture<AddGymnastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGymnastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymnastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
