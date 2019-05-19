import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Service} from '../../models/service';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-services-edit-popup',
  templateUrl: './services-edit-popup.component.html',
  styleUrls: ['./services-edit-popup.component.less']
})
export class ServicesEditPopupComponent implements OnInit {

  public serviceEdit: FormGroup;
  serviceItem: Service;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ServicesEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.serviceEdit = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.idService).subscribe(res => {
        this.serviceItem = res;
        this.serviceEdit = this.fb.group({
          name: [this.serviceItem.name, Validators.required],
          price: [this.serviceItem.price, Validators.required]
        });
        this.cdr.detectChanges();
      });
    } else {
      this.serviceEdit = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.serviceEdit.valid) {
      if (!this.data) {
        this.serviceItem = new Service();
        this.serviceItem.idService = -1;
        this.serviceItem.name = this.serviceEdit.value.name;
        this.serviceItem.price = this.serviceEdit.value.price;
        this.service.post(this.serviceItem).subscribe(res => {
          this.matDialogRef.close();
        });
      } else {
        this.serviceItem.name = this.serviceEdit.value.name;
        this.serviceItem.price = this.serviceEdit.value.price;
        this.service.put(this.serviceItem).subscribe(res => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idService).subscribe(res => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
