import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {EmployeeEditPopupComponent} from '../employee-edit-popup/employee-edit-popup.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.less']
})
export class EmployeeTableComponent implements OnInit {

  public employees: Employee[] = null;

  constructor(
    private service: EmployeeService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.get().subscribe(result => {
      this.employees = new Array<Employee>();
      this.employees = result;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<EmployeeEditPopupComponent>;
    dialogRef = this.dialog.open(EmployeeEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Employee) {
    let dialogRef: MatDialogRef<EmployeeEditPopupComponent>;
    dialogRef = this.dialog.open(EmployeeEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
