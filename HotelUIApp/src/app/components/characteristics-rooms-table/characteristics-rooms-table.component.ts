import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CharacteristicsRooms} from '../../models/characteristicsRooms';
import {CharacteristicsRoomsService} from '../../services/characteristicsRooms.service';
import {CharacteristicsRoomsEditPopupComponent} from '../characteristics-rooms-edit-popup/characteristics-rooms-edit-popup.component';
import {RoomsServices} from '../../models/roomsServices';
import {CharacteristicsService} from '../../services/characteristics.service';
import {Room} from '../../models/room';
import {Characteristic} from '../../models/characteristic';
import {RoomService} from '../../services/room.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-characteristics-rooms-table',
  templateUrl: './characteristics-rooms-table.component.html',
  styleUrls: ['./characteristics-rooms-table.component.less']
})
export class CharacteristicsRoomsTableComponent implements OnInit {

  public characteristicsRooms: CharacteristicsRooms[] = null;
  public rooms: Room[] = null;
  public characteristics: Characteristic[] = null;
  public categories: Category[] = null;

  constructor(
    private service: CharacteristicsRoomsService,
    private roomService: RoomService,
    private charService: CharacteristicsService,
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
      this.charService.get().subscribe(char => {
        this.roomService.get().subscribe(rooms => {
          this.categoryService.get().subscribe(category => {
            this.rooms = new Array<Room>();
            this.characteristics = new Array<Characteristic>();
            this.characteristicsRooms = new Array<CharacteristicsRooms>();
            this.categories = new Array<Category>();
            this.rooms = rooms;
            this.characteristics = char;
            this.characteristicsRooms = result;
            this.categories = category;
            this.cdr.detectChanges();
          });
        });
      });
    });
  }

  getCharacteristic(id: number): Characteristic {
    return this.characteristics.find(x => x.idCharacteristic === id);
  }

  getRoom(id: number): Room {
    return this.rooms.find(x => x.room === id);
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  onCreate() {
    let dialogRef: MatDialogRef<CharacteristicsRoomsEditPopupComponent>;
    dialogRef = this.dialog.open(CharacteristicsRoomsEditPopupComponent,
      {data: {item: null, rooms: this.rooms, characteristics: this.characteristics, categories: this.categories }});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: CharacteristicsRooms) {
    let dialogRef: MatDialogRef<CharacteristicsRoomsEditPopupComponent>;
    dialogRef = this.dialog.open(CharacteristicsRoomsEditPopupComponent,
      {data: {item: item, rooms: this.rooms, characteristics: this.characteristics, categories: this.categories }});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
