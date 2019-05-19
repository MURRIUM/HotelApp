import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Resident} from '../../models/resident';
import {ResidentService} from '../../services/resident.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  resident: Resident;
  @Output() checkLogin = new EventEmitter<void>();

  constructor(
    private service: ResidentService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const login: string = this.loginForm.value.login;
      const password: string = this.loginForm.value.password;
      this.service.login(login, password);
      this.checkLogin.emit();
    }
  }
}
