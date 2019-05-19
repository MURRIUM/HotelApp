import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsEditPopupComponent } from './characteristics-edit-popup.component';

describe('CharacteristicsEditPopupComponent', () => {
  let component: CharacteristicsEditPopupComponent;
  let fixture: ComponentFixture<CharacteristicsEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
