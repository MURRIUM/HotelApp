import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit-popup',
  templateUrl: './employee-edit-popup.component.html',
  styleUrls: ['./employee-edit-popup.component.less']
})
export class EmployeeEditPopupComponent implements OnInit {

  public employeeEdit: FormGroup;
  employee: Employee;

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EmployeeEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.employeeEdit = this.fb.group({
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      sex: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required],
      login: [''],
      password: ['']
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.idEmployee).subscribe(res => {
        this.employee = res;
        this.employeeEdit = this.fb.group({
          surname: [this.employee.surname, Validators.required],
          firstName: [this.employee.firstName, Validators.required],
          secondName: [this.employee.secondName, Validators.required],
          sex: [this.employee.sex, Validators.required],
          position: [this.employee.position, Validators.required],
          salary: [this.employee.salary, Validators.required],
          login: [this.employee.login],
          password: new FormControl({value: this.employee.password, disabled: true})
        });
        this.cdr.detectChanges();
      });
    } else {
      this.employeeEdit = this.fb.group({
        surname: ['', Validators.required],
        firstName: ['', Validators.required],
        secondName: ['', Validators.required],
        sex: ['', Validators.required],
        position: ['', Validators.required],
        salary: ['', Validators.required],
        login: [''],
        password: ['']
      });
    }
  }

  onSubmit(): void {
    if (this.employeeEdit.valid) {
      if (!this.data) {
        this.employee = new Employee();
        this.employee.idEmployee = -1;
        this.employee.surname = this.employeeEdit.value.surname;
        this.employee.firstName = this.employeeEdit.value.firstName;
        this.employee.secondName = this.employeeEdit.value.secondName;
        this.employee.sex = this.employeeEdit.value.sex;
        this.employee.position = this.employeeEdit.value.position;
        this.employee.salary = this.employeeEdit.value.salary;
        this.employee.login = this.employeeEdit.value.login;
        this.employee.password = this.employeeEdit.value.password;
        this.service.post(this.employee).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.employee.surname = this.employeeEdit.value.surname;
        this.employee.firstName = this.employeeEdit.value.firstName;
        this.employee.secondName = this.employeeEdit.value.secondName;
        this.employee.sex = this.employeeEdit.value.sex;
        this.employee.position = this.employeeEdit.value.position;
        this.employee.salary = this.employeeEdit.value.salary;
        this.employee.login = this.employeeEdit.value.login;
        this.employee.password = this.employeeEdit.value.password;
        this.service.put(this.employee).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idEmployee).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
