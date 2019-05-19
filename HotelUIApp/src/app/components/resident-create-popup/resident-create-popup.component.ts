import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Resident} from '../../models/resident';
import {ResidentService} from '../../services/resident.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-resident-create-popup',
  templateUrl: './resident-create-popup.component.html',
  styleUrls: ['./resident-create-popup.component.less']
})
export class ResidentCreatePopupComponent implements OnInit {

  public residentCreate: FormGroup;
  organizations: string[] = ['Частное лицо', 'Юридическое лицо'];
  resident: Resident;

  constructor(
    private service: ResidentService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ResidentCreatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.residentCreate = this.fb.group({
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: [''],
      organization: new FormControl(this.organizations[0]),
      nameOfOrg: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.residentCreate.valid) {
      this.resident = new Resident();
      this.resident.idResident = -1;
      this.resident.firstName = this.residentCreate.value.firstName;
      this.resident.secondName = this.residentCreate.value.secondName;
      this.resident.surname = this.residentCreate.value.surname;
      this.resident.organization = this.residentCreate.value.organization;
      if (this.residentCreate.value.organization === 'Частное лицо') {
        this.resident.nameOfOrganization = '';
      } else {
        this.resident.nameOfOrganization = this.residentCreate.value.nameOfOrg;
      }
      this.service.postResident(this.resident).subscribe(res => this.matDialogRef.close());
    }
  }

}
