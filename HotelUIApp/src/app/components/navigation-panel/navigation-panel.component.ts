import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.less']
})
export class NavigationPanelComponent implements OnInit {

  @Output() checkLogin = new EventEmitter<void>();
  @Input() isAdmin: boolean;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.checkLogin.emit();
  }

}
