import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { DynamicFormComponent } from '@shared/components/dynamic-form/dynamic-form.component';
import { personalInfoFormConfig } from '@features/new-hire/personal-info/personal-info-config';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static: false }) personalInfoForm: DynamicFormComponent;
  personalInfoFormConfig: FieldConfig[];

  constructor(private location: Location) {
  }

  ngOnInit() {
    this.personalInfoFormConfig = personalInfoFormConfig;
  }

  save(value) {
    console.log(value);
  }

  back(event) {
    this.location.back();
  }
}
