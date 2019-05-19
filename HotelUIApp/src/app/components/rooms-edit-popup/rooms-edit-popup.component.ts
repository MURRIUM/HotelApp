import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Room} from '../../models/room';
import {RoomService} from '../../services/room.service';

@Component({
  selector: 'app-rooms-edit-popup',
  templateUrl: './rooms-edit-popup.component.html',
  styleUrls: ['./rooms-edit-popup.component.less']
})
export class RoomsEditPopupComponent implements OnInit {

  public roomEdit: FormGroup;
  room: Room;
  categories: Category[];

  constructor(
    private service: RoomService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<RoomsEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
    });
    this.roomEdit = this.fb.group({
      room: [''],
      capacity: ['', Validators.required],
      category: new FormControl(1),
      cost: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.room).subscribe(res => {
        this.room = res;
        this.roomEdit = this.fb.group({
          room: [this.room.room],
          capacity: [this.room.capacity, Validators.required],
          category: new FormControl(this.room.category),
          cost: [this.room.cost, Validators.required],
        });
        this.cdr.detectChanges();
      });
    } else {
      this.roomEdit = this.fb.group({
        room: [''],
        capacity: ['', Validators.required],
        category: new FormControl(1),
        cost: ['', Validators.required],
      });
    }
  }

  onSubmit(): void {
    if (this.roomEdit.valid) {
      if (!this.data) {
        this.room = new Room();
        this.room.room = -1;
        this.room.capacity = this.roomEdit.value.capacity;
        this.room.category = this.roomEdit.value.category;
        this.room.cost = this.roomEdit.value.cost;
        this.service.post(this.room).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.room.capacity = this.roomEdit.value.capacity;
        this.room.category = this.roomEdit.value.category;
        this.room.cost = this.roomEdit.value.cost;
        this.service.put(this.room).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.room).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
