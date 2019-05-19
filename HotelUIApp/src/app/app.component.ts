import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ResidentService} from './services/resident.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  public authorized = false;
  public isAdmin = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private residentService: ResidentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    this.residentService.checkIsLogin().subscribe(res => {
      if (res.firstName) {
        this.residentService.loggedUser = res;
        this.authorized = true;
        if (res.login === 'admin') {
          this.isAdmin = true;
        }
      }
      this.cdr.detectChanges();
    });
  }

  logout() {
    this.router.navigate(['/']);
    this.residentService.loggedUser = null;
    this.authorized = false;
    this.isAdmin = false;
    this.cdr.detectChanges();
  }
}
