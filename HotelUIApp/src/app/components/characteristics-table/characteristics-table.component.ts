import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Characteristic} from '../../models/characteristic';
import {CharacteristicsService} from '../../services/characteristics.service';
import {CharacteristicsEditPopupComponent} from '../characteristics-edit-popup/characteristics-edit-popup.component';

@Component({
  selector: 'app-characteristics-table',
  templateUrl: './characteristics-table.component.html',
  styleUrls: ['./characteristics-table.component.less']
})
export class CharacteristicsTableComponent implements OnInit {

  public characteristics: Characteristic[] = null;

  constructor(
    private service: CharacteristicsService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.get().subscribe(result => {
      this.characteristics = new Array<Characteristic>();
      this.characteristics = result;
      this.cdr.detectChanges();
    });
  }

  onCreate() {
    let dialogRef: MatDialogRef<CharacteristicsEditPopupComponent>;
    dialogRef = this.dialog.open(CharacteristicsEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Characteristic) {
    let dialogRef: MatDialogRef<CharacteristicsEditPopupComponent>;
    dialogRef = this.dialog.open(CharacteristicsEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
