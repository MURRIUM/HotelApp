import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsRoomsEditPopupComponent } from './characteristics-rooms-edit-popup.component';

describe('CharacteristicsRoomsEditPopupComponent', () => {
  let component: CharacteristicsRoomsEditPopupComponent;
  let fixture: ComponentFixture<CharacteristicsRoomsEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsRoomsEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsRoomsEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
