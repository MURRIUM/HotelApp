import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Resident} from '../../models/resident';
import {ResidentService} from '../../services/resident.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ResidentEditPopupComponent} from '../resident-edit-popup/resident-edit-popup.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-resident-profile',
  templateUrl: './resident-profile.component.html',
  styleUrls: ['./resident-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResidentProfileComponent implements OnInit {

  public resident: Resident = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private service: ResidentService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit() {
    this.getResident();
  }

  getResident() {
    this.service.getReidentById(+this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.resident = res;
      this.cdr.detectChanges();
    });
  }

  onEdit() {
    let dialogRef: MatDialogRef<ResidentEditPopupComponent>;
    dialogRef = this.dialog.open(ResidentEditPopupComponent, {data: {resident: this.resident}});
    dialogRef.afterClosed().subscribe(close => {
      this.getResident();
      this.cdr.detectChanges();
    });
  }

  onDelete() {
    this.service.deleteResident(this.resident.idResident).subscribe(res => {
      this.location.back();
    });

  }

}
