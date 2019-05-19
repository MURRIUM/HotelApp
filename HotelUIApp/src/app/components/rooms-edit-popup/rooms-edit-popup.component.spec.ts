import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsEditPopupComponent } from './rooms-edit-popup.component';

describe('RoomsEditPopupComponent', () => {
  let component: RoomsEditPopupComponent;
  let fixture: ComponentFixture<RoomsEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
