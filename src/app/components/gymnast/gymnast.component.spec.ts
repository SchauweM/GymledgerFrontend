import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnastComponent } from './gymnast.component';

describe('GymnastComponent', () => {
  let component: GymnastComponent;
  let fixture: ComponentFixture<GymnastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymnastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
