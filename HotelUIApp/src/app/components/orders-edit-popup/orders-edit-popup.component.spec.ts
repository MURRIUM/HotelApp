import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEditPopupComponent } from './orders-edit-popup.component';

describe('OrdersEditPopupComponent', () => {
  let component: OrdersEditPopupComponent;
  let fixture: ComponentFixture<OrdersEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
