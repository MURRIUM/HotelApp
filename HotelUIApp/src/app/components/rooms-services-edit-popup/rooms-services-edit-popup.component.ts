import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CharacteristicsRooms} from '../../models/characteristicsRooms';
import {Room} from '../../models/room';
import {Characteristic} from '../../models/characteristic';
import {Category} from '../../models/category';
import {CharacteristicsRoomsService} from '../../services/characteristicsRooms.service';
import {RoomService} from '../../services/room.service';
import {CharacteristicsService} from '../../services/characteristics.service';
import {CategoryService} from '../../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Service} from '../../models/service';
import {Employee} from '../../models/employee';
import {RoomsServices} from '../../models/roomsServices';
import {RoomServiceService} from '../../services/roomService.service';

@Component({
  selector: 'app-rooms-services-edit-popup',
  templateUrl: './rooms-services-edit-popup.component.html',
  styleUrls: ['./rooms-services-edit-popup.component.less']
})
export class RoomsServicesEditPopupComponent implements OnInit {

  public roomsServicesEdit: FormGroup;
  roomsServices: RoomsServices;
  public rooms: Room[] = null;
  public services: Service[] = null;
  public employees: Employee[] = null;
  public categories: Category[] = null;

  constructor(
    private service: RoomServiceService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<RoomsServicesEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.getData();
  }

  ngOnInit() {
    if (this.data.item) {
      this.service.getById(this.data.item.idService).subscribe(res => {
        this.roomsServices = res;
        this.cdr.detectChanges();
      });
    }
  }

  getData() {
    this.rooms = new Array<Room>();
    this.services = new Array<Service>();
    this.categories = new Array<Category>();
    this.employees = new Array<Employee>();
    this.rooms = this.data.rooms;
    this.services = this.data.services;
    this.categories = this.data.categories;
    this.employees = this.data.employees;
    if (this.data.item) {
      this.roomsServicesEdit = this.fb.group({
        room: new FormControl(this.data.item.room),
        service: new FormControl(this.data.item.service),
        employee: new FormControl(this.data.item.employee)
      });
    } else {
      this.roomsServicesEdit = this.fb.group({
        room: new FormControl(1),
        service: new FormControl(1),
        employee: new FormControl(1)
      });
    }
  }

  getService(id: number): Service {
    return this.services.find(x => x.idService === id);
  }

  getRoom(id: number): Room {
    return this.rooms.find(x => x.room === id);
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  getEmployee(id: number): Employee {
    return this.employees.find(x => x.idEmployee === id);
  }

  onSubmit(): void {
    if (this.roomsServicesEdit.valid) {
      if (!this.data.item) {
        this.roomsServices = new RoomsServices();
        this.roomsServices.idService = -1;
        this.roomsServices.room = this.roomsServicesEdit.value.room;
        this.roomsServices.employee = this.roomsServicesEdit.value.employee;
        this.roomsServices.service = this.roomsServicesEdit.value.service;
        this.service.post(this.roomsServices).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.roomsServices.room = this.roomsServicesEdit.value.room;
        this.roomsServices.employee = this.roomsServicesEdit.value.employee;
        this.roomsServices.service = this.roomsServicesEdit.value.service;
        this.service.put(this.roomsServices).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idService).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
