import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoryEditPopupComponent} from '../category-edit-popup/category-edit-popup.component';
import {RoomsServices} from '../../models/roomsServices';
import {RoomServiceService} from '../../services/roomService.service';
import {RoomsServicesEditPopupComponent} from '../rooms-services-edit-popup/rooms-services-edit-popup.component';
import {Room} from '../../models/room';
import {Service} from '../../models/service';
import {Employee} from '../../models/employee';
import {RoomService} from '../../services/room.service';
import {ServiceService} from '../../services/service.service';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-rooms-services-table',
  templateUrl: './rooms-services-table.component.html',
  styleUrls: ['./rooms-services-table.component.less']
})
export class RoomsServicesTableComponent implements OnInit {

  public roomsServices: RoomsServices[] = null;
  public rooms: Room[] = null;
  public categories: Category[] = null;
  public services: Service[] = null;
  public employees: Employee[] = null;

  constructor(
    private service: RoomServiceService,
    private roomService: RoomService,
    private categoryService: CategoryService,
    private serviceService: ServiceService,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.service.get().subscribe(result => {
      this.roomService.get().subscribe(rooms => {
        this.serviceService.get().subscribe(services => {
          this.employeeService.get().subscribe(employees => {
            this.categoryService.get().subscribe(categories => {
              this.roomsServices = new Array<RoomsServices>();
              this.roomsServices = result;
              this.employees = new Array<Employee>();
              this.employees = employees;
              this.rooms = new Array<Room>();
              this.rooms = rooms;
              this.services = new Array<Service>();
              this.services = services;
              this.categories = new Array<Category>();
              this.categories = categories;
              this.cdr.detectChanges();
            });
          });
        });
      });
    });
  }

  getRoom(id: number): Room {
    return this.rooms.find(x => x.room === id);
  }

  getEmployee(id: number): Employee {
    return this.employees.find(x => x.idEmployee === id);
  }

  getService(id: number): Service {
    return this.services.find(x => x.idService === id);
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  onCreate() {
    let dialogRef: MatDialogRef<RoomsServicesEditPopupComponent>;
    dialogRef = this.dialog.open(RoomsServicesEditPopupComponent,
      {data: {item: null, categories: this.categories, employees: this.employees, rooms: this.rooms, services: this.services}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: RoomsServices) {
    let dialogRef: MatDialogRef<RoomsServicesEditPopupComponent>;
    dialogRef = this.dialog.open(RoomsServicesEditPopupComponent,
      {data: {item: item, categories: this.categories, employees: this.employees, rooms: this.rooms, services: this.services}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
