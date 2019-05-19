import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ResidentService} from '../../services/resident.service';
import {Resident} from '../../models/resident';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ResidentEditPopupComponent} from '../resident-edit-popup/resident-edit-popup.component';
import {ResidentCreatePopupComponent} from '../resident-create-popup/resident-create-popup.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resident-table',
  templateUrl: './resident-table.component.html',
  styleUrls: ['./resident-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResidentTableComponent implements OnInit {

  public residents: Resident[] = null;

  constructor(
    private service: ResidentService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getResidents();
  }

  getResidents() {
    this.service.getResidents().subscribe(residents => {
      this.residents = new Array<Resident>();
      this.residents = residents;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<ResidentCreatePopupComponent>;
    dialogRef = this.dialog.open(ResidentCreatePopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getResidents();
      this.cdr.detectChanges();
    });
  }
}
