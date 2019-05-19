import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmployeeTableComponent} from './components/employee-table/employee-table.component';
import {ResidentTableComponent} from './components/resident-table/resident-table.component';
import {ResidentProfileComponent} from './components/resident-profile/resident-profile.component';
import {CategoryTableComponent} from './components/category-table/category-table.component';
import {CharacteristicsTableComponent} from './components/characteristics-table/characteristics-table.component';
import {StocksTableComponent} from './components/stocks-table/stocks-table.component';
import {ServicesTableComponent} from './components/services-table/services-table.component';
import {RoomsTableComponent} from './components/rooms-table/rooms-table.component';
import {AdminGuard} from './guards/admin.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CharacteristicsRoomsTableComponent} from './components/characteristics-rooms-table/characteristics-rooms-table.component';
import {RoomsServicesTableComponent} from './components/rooms-services-table/rooms-services-table.component';
import {OrdersTableComponent} from './components/orders-table/orders-table.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'employees', component: EmployeeTableComponent, canActivate: [AdminGuard]},
  {path: 'residents', component: ResidentTableComponent},
  {path: 'resident/:id', component: ResidentProfileComponent},
  {path: 'categories', component: CategoryTableComponent, canActivate: [AdminGuard]},
  {path: 'characteristics', component: CharacteristicsTableComponent, canActivate: [AdminGuard]},
  {path: 'characteristicsRooms', component: CharacteristicsRoomsTableComponent, canActivate: [AdminGuard]},
  {path: 'orders', component: OrdersTableComponent},
  {path: 'rooms', component: RoomsTableComponent, canActivate: [AdminGuard]},
  {path: 'roomsServices', component: RoomsServicesTableComponent},
  {path: 'services', component: ServicesTableComponent, canActivate: [AdminGuard]},
  {path: 'stocks', component: StocksTableComponent, canActivate: [AdminGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
