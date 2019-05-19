import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Resident} from '../../models/resident';
import {ResidentService} from '../../services/resident.service';

@Component({
  selector: 'app-resident-edit-popup',
  templateUrl: './resident-edit-popup.component.html',
  styleUrls: ['./resident-edit-popup.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResidentEditPopupComponent implements OnInit {

  public residentEdit: FormGroup;
  organizations: string[] = ['Частное лицо', 'Юридическое лицо'];
  resident: Resident;

  constructor(
    private service: ResidentService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ResidentEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.residentEdit = this.fb.group({
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: [''],
      organization: new FormControl(this.organizations[0]),
      nameOfOrg: ['']
    });
  }

  ngOnInit() {
    this.service.getReidentById(this.data.resident.idResident).subscribe(res => {
      this.resident = res;
      this.residentEdit = this.fb.group({
        surname: [this.resident.surname, Validators.required],
        firstName: [this.resident.firstName, Validators.required],
        secondName: [this.resident.secondName],
        organization: new FormControl(this.resident.organization),
        nameOfOrg: [this.resident.nameOfOrganization]
      });
      this.residentEdit.controls.organization.setValue(this.resident.organization, {onlySelf: true});
      this.cdr.detectChanges();
    });
  }

  onSubmit(): void {
    if (this.residentEdit.valid) {
      this.resident.firstName = this.residentEdit.value.firstName;
      this.resident.secondName = this.residentEdit.value.secondName;
      this.resident.surname = this.residentEdit.value.surname;
      this.resident.organization = this.residentEdit.value.organization;
      if (this.residentEdit.value.organization === 'Частное лицо') {
        this.resident.nameOfOrganization = '';
      } else {
        this.resident.nameOfOrganization = this.residentEdit.value.nameOfOrg;
      }
      this.service.putResident(this.resident).subscribe(res => this.matDialogRef.close());
    }
  }
}
