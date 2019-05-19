import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEditPopupComponent } from './services-edit-popup.component';

describe('ServicesEditPopupComponent', () => {
  let component: ServicesEditPopupComponent;
  let fixture: ComponentFixture<ServicesEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
