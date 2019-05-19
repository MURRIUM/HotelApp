import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Characteristic} from '../../models/characteristic';
import {CharacteristicsService} from '../../services/characteristics.service';

@Component({
  selector: 'app-characteristics-edit-popup',
  templateUrl: './characteristics-edit-popup.component.html',
  styleUrls: ['./characteristics-edit-popup.component.less']
})
export class CharacteristicsEditPopupComponent implements OnInit {

  public categoryEdit: FormGroup;
  characteristics: Characteristic;

  constructor(
    private service: CharacteristicsService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CharacteristicsEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef
  ) {
    this.categoryEdit = this.fb.group({
      nameCharacteristic: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    if (this.data) {
      this.service.getById(this.data.item.idCharacteristic).subscribe(res => {
        this.characteristics = res;
        this.categoryEdit = this.fb.group({
          nameCharacteristic: [this.characteristics.nameCharacteristic, Validators.required],
          description: [this.characteristics.description]
        });
        this.cdr.detectChanges();
      });
    } else {
      this.categoryEdit = this.fb.group({
        nameCharacteristic: ['', Validators.required],
        description: ['']
      });
    }
  }

  onSubmit(): void {
    if (this.categoryEdit.valid) {
      if (!this.data) {
        this.characteristics = new Characteristic();
        this.characteristics.idCharacteristic = -1;
        this.characteristics.nameCharacteristic = this.categoryEdit.value.nameCharacteristic;
        this.characteristics.description = this.categoryEdit.value.description;
        this.service.post(this.characteristics).subscribe(() => {
          this.matDialogRef.close();
        });
      } else {
        this.characteristics.nameCharacteristic = this.categoryEdit.value.nameCharacteristic;
        this.characteristics.description = this.categoryEdit.value.description;
        this.service.put(this.characteristics).subscribe(() => {
          this.matDialogRef.close();
        });
      }
    }
  }

  onDelete() {
    if (this.data) {
      this.service.delete(this.data.item.idCharacteristic).subscribe(() => {
        this.matDialogRef.close();
      });
    } else {
      this.matDialogRef.close();
    }
  }

}
