import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksEditPopupComponent } from './stocks-edit-popup.component';

describe('StocksEditPopupComponent', () => {
  let component: StocksEditPopupComponent;
  let fixture: ComponentFixture<StocksEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
