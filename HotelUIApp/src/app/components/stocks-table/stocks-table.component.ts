import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Stock} from '../../models/stock';
import {StockService} from '../../services/stock.service';
import {StocksEditPopupComponent} from '../stocks-edit-popup/stocks-edit-popup.component';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.less']
})
export class StocksTableComponent implements OnInit {

  public stocks: Stock[] = null;

  constructor(
    private service: StockService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.get().subscribe(result => {
      this.stocks = new Array<Stock>();
      this.stocks = result;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<StocksEditPopupComponent>;
    dialogRef = this.dialog.open(StocksEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Stock) {
    let dialogRef: MatDialogRef<StocksEditPopupComponent>;
    dialogRef = this.dialog.open(StocksEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
