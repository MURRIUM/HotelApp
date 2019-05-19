import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsServicesTableComponent } from './rooms-services-table.component';

describe('RoomsServicesTableComponent', () => {
  let component: RoomsServicesTableComponent;
  let fixture: ComponentFixture<RoomsServicesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsServicesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
