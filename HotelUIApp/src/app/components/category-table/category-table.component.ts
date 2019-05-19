import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoryEditPopupComponent} from '../category-edit-popup/category-edit-popup.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.less']
})
export class CategoryTableComponent implements OnInit {

  public categories: Category[] = null;

  constructor(
    private service: CategoryService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.get().subscribe(result => {
      this.categories = new Array<Category>();
      this.categories = result;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<CategoryEditPopupComponent>;
    dialogRef = this.dialog.open(CategoryEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Category) {
    let dialogRef: MatDialogRef<CategoryEditPopupComponent>;
    dialogRef = this.dialog.open(CategoryEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }
}
