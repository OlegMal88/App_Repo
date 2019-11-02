import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DynamicFormComponent } from '@shared/components/dynamic-form/dynamic-form.component';
import { personalInfoFormConfig } from '@features/new-hire/personal-info/personal-info-config';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @ViewChild(DynamicFormComponent, {static: false}) personalInfoForm: DynamicFormComponent;
  personalInfoFormConfig: FieldConfig[];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personalInfoFormConfig = personalInfoFormConfig
    // TODO: to choose better solution
    
    // this.personalInfoForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   middleInitial: [''],
    //   lastName: ['', [Validators.required]],
    //   otherLastName: [''],
    //   ssn: ['', [Validators.required]],
    //   dateOfBirth: ['', [Validators.required]],
    //   streetAdress: ['', [Validators.required]],
    //   city: ['', [Validators.required]],
    //   state: ['', [Validators.required]],
    //   zipCode: ['', [Validators.required, Validators.minLength(this.MIN_LENTH)]],
    // });
  }

  // isInvalidInput(controlName: string) {
  //   const control = this.personalInfoForm.get(controlName);
  //   if (!control) {
  //     return;
  //   }
  //   return control.touched && control.invalid;
  // }

  save(value) {
    console.log(value);
  }
}
