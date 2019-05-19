import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsRoomsTableComponent } from './characteristics-rooms-table.component';

describe('CharacteristicsRoomsTableComponent', () => {
  let component: CharacteristicsRoomsTableComponent;
  let fixture: ComponentFixture<CharacteristicsRoomsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsRoomsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsRoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
