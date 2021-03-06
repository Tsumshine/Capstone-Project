import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDisplayComponent } from './usersdisplay.component';

describe('UsersDisplayComponent', () => {
  let component: UsersDisplayComponent;
  let fixture: ComponentFixture<UsersDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
