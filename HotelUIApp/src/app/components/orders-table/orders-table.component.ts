import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Room} from '../../models/room';
import {Category} from '../../models/category';
import {RoomService} from '../../services/room.service';
import {CategoryService} from '../../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';
import {Resident} from '../../models/resident';
import {ResidentService} from '../../services/resident.service';
import {StockService} from '../../services/stock.service';
import {Stock} from '../../models/stock';
import {OrdersEditPopupComponent} from '../orders-edit-popup/orders-edit-popup.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.less']
})
export class OrdersTableComponent implements OnInit {

  public orders: Order[] = null;
  public rooms: Room[] = null;
  public residents: Resident[] = null;
  public stocks: Stock[] = null;
  public categories: Category[] = null;

  constructor(
    private service: OrderService,
    private roomService: RoomService,
    private residentService: ResidentService,
    private categoryService: CategoryService,
    private stockService: StockService,
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
        this.stockService.get().subscribe(stocks => {
            this.residentService.getResidents().subscribe(residents => {
              this.categoryService.get().subscribe(categories => {
                this.orders = new Array<Order>();
                this.orders = result;
                this.rooms = new Array<Room>();
                this.rooms = rooms;
                this.stocks = new Array<Stock>();
                this.stocks = stocks;
                this.residents = new Array<Resident>();
                this.residents = residents;
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

  getStock(id: number): Stock {
    return this.stocks.find(x => x.idStock === id);
  }

  getResident(id: number): Resident {
    return this.residents.find(x => x.idResident === id);
  }

  getCategory(id: number): Category {
    return this.categories.find(x => x.idCategory === id);
  }

  onCreate() {
    let dialogRef: MatDialogRef<OrdersEditPopupComponent>;
    dialogRef = this.dialog.open(OrdersEditPopupComponent,
      {data: {item: null, categories: this.categories, residents: this.residents, rooms: this.rooms, stocks: this.stocks}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

  onEdit(item: Order) {
    let dialogRef: MatDialogRef<OrdersEditPopupComponent>;
    dialogRef = this.dialog.open(OrdersEditPopupComponent,
      {data: {item: item, categories: this.categories, residents: this.residents, rooms: this.rooms, stocks: this.stocks}});
    dialogRef.afterClosed().subscribe(close => {
      this.getData();
      this.cdr.detectChanges();
    });
  }

}
