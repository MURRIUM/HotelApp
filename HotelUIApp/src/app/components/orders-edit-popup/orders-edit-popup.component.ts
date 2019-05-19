import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RoomsServices} from '../../models/roomsServices';
import {Room} from '../../models/room';
import {Service} from '../../models/service';
import {Employee} from '../../models/employee';
import {Category} from '../../models/category';
import {RoomServiceService} from '../../services/roomService.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Order} from '../../models/order';
import {Stock} from '../../models/stock';
import {Resident} from '../../models/resident';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-orders-edit-popup',
  templateUrl: './orders-edit-popup.component.html',
  styleUrls: ['./orders-edit-popup.component.less']
})
export class OrdersEditPopupComponent implements OnInit {

  public ordersEdit: FormGroup;
  order: Order;
  public rooms: Room[] = null;
  public stocks: Stock[] = null;
  public residents: Resident[] = null;
  public categories: Category[] = null;

  constructor(
    private service: OrderService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<OrdersEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.getData();
  }

  ngOnInit() {
    if (this.data.item) {
      this.service.getById(this.data.item.idOrder).subscribe(res => {
        this.order = res;
        this.cdr.detectChanges();
      });
    }
  }

  getData() {
    this.rooms = new Array<Room>();
    this.stocks = new Array<Stock>();
    this.categories = new Array<Category>();
    this.residents = new Array<Resident>();
    this.rooms = this.data.rooms;
    this.stocks = this.data.stocks;
    this.categories = this.data.categories;
    this.residents = this.data.residents;
    if (this.data.item) {
      const checkInDate = new Date(this.data.item.checkInDate);
      checkInDate.setDate(checkInDate.getDate() + 1);
      const dateOfEviction = new Date(this.data.item.dateOfEviction);
      dateOfEviction.setDate(dateOfEviction.getDate() + 1);

      this.ordersEdit = this.fb.group({
        resident: new FormControl(this.data.item.resident),
        room: new FormControl(this.data.item.room),
        stock: new FormControl(this.data.item.stock),
        checkInDate: [checkInDate.toISOString().slice(0, 10), Validators.required],
        dateOfEviction: [dateOfEviction.toISOString().slice(0, 10), Validators.required]
      });
    } else {
      this.ordersEdit = this.fb.group({
        resident: new FormControl(1),
        room: new FormControl(1),
        stock: new FormControl(1),
        checkInDate: ['', Validators.required],
        dateOfEviction: ['', Validators.required]
      });
    }
  }

  getStock(id: number): Stock {
    return this.stocks.find(x => x.idStock === id);
  }

  getRoom(id: number): Room {
    return this.rooms.find(x => x.room === id);
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  getResident(id: number): Resident {
    return this.residents.find(x => x.idResident === id);
  }

  onSubmit(): void {
    if (this.ordersEdit.valid) {
      if (!this.data.item) {
        this.order = new Order();
        this.order.idOrder = -1;
        this.order.room = this.ordersEdit.value.room;
        this.order.resident = this.ordersEdit.value.resident;
        this.order.stock = this.ordersEdit.value.stock;
        this.order.checkInDate = new Date(this.ordersEdit.value.checkInDate);
        this.order.dateOfEviction = new Date(this.ordersEdit.value.dateOfEviction);
        this.service.post(this.order).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.order.room = this.ordersEdit.value.room;
        this.order.resident = this.ordersEdit.value.resident;
        this.order.stock = this.ordersEdit.value.stock;
        this.order.checkInDate = new Date(this.ordersEdit.value.checkInDate);
        this.order.dateOfEviction = new Date(this.ordersEdit.value.dateOfEviction);
        this.service.put(this.order).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idOrder).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
