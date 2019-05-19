import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentEditPopupComponent } from './resident-edit-popup.component';

describe('ResidentEditPopupComponent', () => {
  let component: ResidentEditPopupComponent;
  let fixture: ComponentFixture<ResidentEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
