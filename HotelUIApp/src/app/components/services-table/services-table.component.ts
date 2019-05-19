import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoryEditPopupComponent} from '../category-edit-popup/category-edit-popup.component';
import {Service} from '../../models/service';
import {ServiceService} from '../../services/service.service';
import {ServicesEditPopupComponent} from '../services-edit-popup/services-edit-popup.component';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.less']
})
export class ServicesTableComponent implements OnInit {

  public services: Service[] = null;

  constructor(
    private service: ServiceService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.get().subscribe(result => {
      this.services = new Array<Service>();
      this.services = result;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<ServicesEditPopupComponent>;
    dialogRef = this.dialog.open(ServicesEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Service) {
    let dialogRef: MatDialogRef<ServicesEditPopupComponent>;
    dialogRef = this.dialog.open(ServicesEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
