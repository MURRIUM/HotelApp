import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditPopupComponent } from './category-edit-popup.component';

describe('CategoryEditPopupComponent', () => {
  let component: CategoryEditPopupComponent;
  let fixture: ComponentFixture<CategoryEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
