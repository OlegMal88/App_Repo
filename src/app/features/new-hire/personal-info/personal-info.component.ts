import { PersonalInfoFieldsName } from './../../../shared/interfaces/personal-info.interface';
import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { DynamicFormComponent } from '@shared/components/dynamic-form/dynamic-form.component';
import { PERSONAL_INFO_FORM_CONFIG } from '@features/new-hire/personal-info/personal-info-config';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  @ViewChild(DynamicFormComponent, { static: false }) dynamicFormComponent: DynamicFormComponent;
  personalInfoFormConfig: FieldConfig[] = PERSONAL_INFO_FORM_CONFIG;

  constructor(private location: Location) {
  }

  save(value: PersonalInfoFieldsName) {
    console.log(value);
  }

  back() {
    this.location.back();
  }
}
