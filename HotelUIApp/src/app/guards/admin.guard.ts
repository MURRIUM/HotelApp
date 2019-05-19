import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ResidentService} from '../services/resident.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private service: ResidentService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.service && this.service.loggedUser && this.service.loggedUser.login === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
