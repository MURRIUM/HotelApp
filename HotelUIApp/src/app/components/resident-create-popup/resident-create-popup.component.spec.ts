import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentCreatePopupComponent } from './resident-create-popup.component';

describe('ResidentCreatePopupComponent', () => {
  let component: ResidentCreatePopupComponent;
  let fixture: ComponentFixture<ResidentCreatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentCreatePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentCreatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
