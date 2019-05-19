import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-category-edit-popup',
  templateUrl: './category-edit-popup.component.html',
  styleUrls: ['./category-edit-popup.component.less']
})
export class CategoryEditPopupComponent implements OnInit {


  public categoryEdit: FormGroup;
  category: Category;

  constructor(
    private service: CategoryService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CategoryEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.categoryEdit = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.idCategory).subscribe(res => {
        this.category = res;
        this.categoryEdit = this.fb.group({
          name: [this.category.name, Validators.required]
        });
        this.cdr.detectChanges();
      });
    } else {
      this.categoryEdit = this.fb.group({
        name: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.categoryEdit.valid) {
      if (!this.data) {
        this.category = new Category();
        this.category.idCategory = -1;
        this.category.name = this.categoryEdit.value.name;
        this.service.post(this.category).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.category.name = this.categoryEdit.value.name;
        this.service.put(this.category).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idCategory).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }
}
