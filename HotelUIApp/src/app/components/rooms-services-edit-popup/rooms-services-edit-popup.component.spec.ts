import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsServicesEditPopupComponent } from './rooms-services-edit-popup.component';

describe('RoomsServicesEditPopupComponent', () => {
  let component: RoomsServicesEditPopupComponent;
  let fixture: ComponentFixture<RoomsServicesEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsServicesEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsServicesEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
