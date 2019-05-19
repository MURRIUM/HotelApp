import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeTableComponent} from './components/employee-table/employee-table.component';
import {NavigationPanelComponent} from './components/navigation-panel/navigation-panel.component';
import {ResidentTableComponent} from './components/resident-table/resident-table.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ResidentService} from './services/resident.service';
import { ResidentProfileComponent } from './components/resident-profile/resident-profile.component';
import { ResidentEditPopupComponent } from './components/resident-edit-popup/resident-edit-popup.component';
import { ResidentCreatePopupComponent } from './components/resident-create-popup/resident-create-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {CategoryService} from './services/category.service';
import {CharacteristicsService} from './services/characteristics.service';
import {CharacteristicsRoomsService} from './services/characteristicsRooms.service';
import {EmployeeService} from './services/employee.service';
import {OrderService} from './services/order.service';
import {RoomService} from './services/room.service';
import {ServiceService} from './services/service.service';
import {StockService} from './services/stock.service';
import {RoomServiceService} from './services/roomService.service';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoryEditPopupComponent } from './components/category-edit-popup/category-edit-popup.component';
import { CharacteristicsTableComponent } from './components/characteristics-table/characteristics-table.component';
import { CharacteristicsEditPopupComponent } from './components/characteristics-edit-popup/characteristics-edit-popup.component';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';
import { StocksEditPopupComponent } from './components/stocks-edit-popup/stocks-edit-popup.component';
import { ServicesTableComponent } from './components/services-table/services-table.component';
import { ServicesEditPopupComponent } from './components/services-edit-popup/services-edit-popup.component';
import { EmployeeEditPopupComponent } from './components/employee-edit-popup/employee-edit-popup.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { RoomsEditPopupComponent } from './components/rooms-edit-popup/rooms-edit-popup.component';
import {AdminGuard} from './guards/admin.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacteristicsRoomsEditPopupComponent } from './components/characteristics-rooms-edit-popup/characteristics-rooms-edit-popup.component';
import {CharacteristicsRoomsTableComponent} from './components/characteristics-rooms-table/characteristics-rooms-table.component';
import { RoomsServicesTableComponent } from './components/rooms-services-table/rooms-services-table.component';
import { RoomsServicesEditPopupComponent } from './components/rooms-services-edit-popup/rooms-services-edit-popup.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersEditPopupComponent } from './components/orders-edit-popup/orders-edit-popup.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    NavigationPanelComponent,
    ResidentTableComponent,
    ResidentProfileComponent,
    ResidentEditPopupComponent,
    ResidentCreatePopupComponent,
    LoginFormComponent,
    CategoryTableComponent,
    CategoryEditPopupComponent,
    CharacteristicsTableComponent,
    CharacteristicsEditPopupComponent,
    StocksTableComponent,
    StocksEditPopupComponent,
    ServicesTableComponent,
    ServicesEditPopupComponent,
    EmployeeEditPopupComponent,
    RoomsTableComponent,
    RoomsEditPopupComponent,
    PageNotFoundComponent,
    CharacteristicsRoomsTableComponent,
    CharacteristicsRoomsEditPopupComponent,
    RoomsServicesTableComponent,
    RoomsServicesEditPopupComponent,
    OrdersTableComponent,
    OrdersEditPopupComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    AdminGuard,
    CategoryService,
    CharacteristicsService,
    CharacteristicsRoomsService,
    EmployeeService,
    OrderService,
    ResidentService,
    RoomService,
    RoomServiceService,
    ServiceService,
    StockService
  ],
  entryComponents: [
    ResidentEditPopupComponent,
    ResidentCreatePopupComponent,
    CategoryEditPopupComponent,
    CharacteristicsEditPopupComponent,
    StocksEditPopupComponent,
    ServicesEditPopupComponent,
    EmployeeEditPopupComponent,
    RoomsEditPopupComponent,
    CharacteristicsRoomsEditPopupComponent,
    RoomsServicesEditPopupComponent,
    OrdersEditPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
