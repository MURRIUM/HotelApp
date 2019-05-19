import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Stock} from '../../models/stock';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-stocks-edit-popup',
  templateUrl: './stocks-edit-popup.component.html',
  styleUrls: ['./stocks-edit-popup.component.less']
})
export class StocksEditPopupComponent implements OnInit {

  public stockEdit: FormGroup;
  stock: Stock;

  constructor(
    private service: StockService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<StocksEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.stockEdit = this.fb.group({
      name: ['', Validators.required],
      discount: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.idStock).subscribe(res => {
        this.stock = res;
        this.stockEdit = this.fb.group({
          name: [this.stock.name, Validators.required],
          discount: [this.stock.discount, Validators.required]
        });
        this.cdr.detectChanges();
      });
    } else {
      this.stockEdit = this.fb.group({
        name: ['', Validators.required],
        discount: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.stockEdit.valid) {
      if (!this.data) {
        this.stock = new Stock();
        this.stock.idStock = -1;
        this.stock.name = this.stockEdit.value.name;
        this.stock.discount = this.stockEdit.value.discount;
        this.service.post(this.stock).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.stock.name = this.stockEdit.value.name;
        this.service.put(this.stock).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idStock).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
