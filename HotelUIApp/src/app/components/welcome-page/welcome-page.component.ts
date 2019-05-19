import { Component, OnInit } from '@angular/core';
import {ResidentService} from '../../services/resident.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent implements OnInit {

  constructor(
    private service: ResidentService
  ) { }

  ngOnInit() {
  }

  getEmployee(): Employee {
    return this.service.loggedUser;
  }

}
