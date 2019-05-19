import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoryEditPopupComponent} from '../category-edit-popup/category-edit-popup.component';
import {Room} from '../../models/room';
import {RoomService} from '../../services/room.service';
import {RoomsEditPopupComponent} from '../rooms-edit-popup/rooms-edit-popup.component';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.less']
})
export class RoomsTableComponent implements OnInit {

  public rooms: Room[] = null;
  public categories: Category[] = null;

  constructor(
    private service: RoomService,
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.service.get().subscribe(result => {
      this.categoryService.get().subscribe(res => {
        this.rooms = new Array<Room>();
        this.rooms = result;
        this.categories = new Array<Category>();
        this.categories = res;
        this.cdr.detectChanges();
      });
    });
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  onCreate() {
    let dialogRef: MatDialogRef<RoomsEditPopupComponent>;
    dialogRef = this.dialog.open(RoomsEditPopupComponent, {data: null});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Room) {
    let dialogRef: MatDialogRef<RoomsEditPopupComponent>;
    dialogRef = this.dialog.open(RoomsEditPopupComponent, {data: {item: item}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
