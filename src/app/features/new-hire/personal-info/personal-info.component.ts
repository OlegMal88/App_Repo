import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { DynamicFormComponent } from '@shared/components/dynamic-form/dynamic-form.component';
import { PERSONAL_INFO_FORM_CONFIG, FORM_CLASSES } from '@features/new-hire/personal-info/personal-info-config';
import { FieldConfig } from '@shared/interfaces/field.interface';
import { PersonalInfoFieldsName } from '@shared/interfaces/personal-info.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalInfoComponent {
  @ViewChild(DynamicFormComponent, { static: false }) dynamicFormComponent: DynamicFormComponent;
  personalInfoFormConfig: FieldConfig[] = PERSONAL_INFO_FORM_CONFIG;
  personalInfoFormClass = FORM_CLASSES.personalInfo;

  constructor(private location: Location) {
  }

  save(value: PersonalInfoFieldsName) {
    console.log(value);
  }

  back() {
    this.location.back();
  }
}
