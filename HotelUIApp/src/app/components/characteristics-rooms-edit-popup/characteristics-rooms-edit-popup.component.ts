import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CharacteristicsRooms} from '../../models/characteristicsRooms';
import {CharacteristicsRoomsService} from '../../services/characteristicsRooms.service';
import {Room} from '../../models/room';
import {Characteristic} from '../../models/characteristic';
import {RoomService} from '../../services/room.service';
import {CharacteristicsService} from '../../services/characteristics.service';
import {Observable, Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-characteristics-rooms-edit-popup',
  templateUrl: './characteristics-rooms-edit-popup.component.html',
  styleUrls: ['./characteristics-rooms-edit-popup.component.less']
})
export class CharacteristicsRoomsEditPopupComponent implements OnInit {

  public characteristicsRoomsEdit: FormGroup;
  characteristicsRooms: CharacteristicsRooms;
  public rooms: Room[] = null;
  public characteristics: Characteristic[] = null;
  public categories: Category[] = null;

  constructor(
    private service: CharacteristicsRoomsService,
    private roomService: RoomService,
    private charService: CharacteristicsService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CharacteristicsRoomsEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.getData();
  }

  ngOnInit() {
    if (this.data.item) {
      this.service.getById(this.data.item.room, this.data.item.idCharacteristic).subscribe(res => {
        this.characteristicsRooms = res;
        this.cdr.detectChanges();
      });
    }
  }

  getData() {
    this.rooms = new Array<Room>();
    this.characteristics = new Array<Characteristic>();
    this.categories = new Array<Category>();
    this.rooms = this.data.rooms;
    this.characteristics = this.data.characteristics;
    this.categories = this.data.categories;
    if (this.data.item) {
      this.characteristicsRoomsEdit = this.fb.group({
        room: new FormControl(this.data.item.room),
        idCharacteristic: new FormControl(this.data.item.idCharacteristic),
      });
    } else {
      this.characteristicsRoomsEdit = this.fb.group({
        room: new FormControl(1),
        idCharacteristic: new FormControl(1),
      });
    }
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

  onSubmit(): void {
    if (this.characteristicsRoomsEdit.valid) {
      if (!this.data.item) {
        this.characteristicsRooms = new CharacteristicsRooms();
        this.characteristicsRooms.idCharacteristic = this.characteristicsRoomsEdit.value.idCharacteristic;
        this.characteristicsRooms.room = this.characteristicsRoomsEdit.value.room;
        this.service.post(this.characteristicsRooms).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.characteristicsRooms = new CharacteristicsRooms();
        this.characteristicsRooms.idCharacteristic = this.characteristicsRoomsEdit.value.idCharacteristic;
        this.characteristicsRooms.room = this.characteristicsRoomsEdit.value.room;
        this.service.delete(this.data.item).subscribe(res => {
          this.service.post(this.characteristicsRooms).subscribe(res => {
            this.matDialogRef.close();
          });
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
