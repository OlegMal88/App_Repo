import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup;
  tempMockStates = [
    'Washington',
    'Taxes',
    'Florida',
  ];
  MIN_LENTH = 4;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      middleInitial: [''],
      lastName: ['', [Validators.required]],
      otherLastName: [''],
      ssn: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      streetAdress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.minLength(this.MIN_LENTH)]],
    });
  }

  isInvalidInput(controlName: string) {
    const control = this.personalInfoForm.get(controlName);
    if (!control) {
      return;
    }
    return control.touched && control.invalid;
  }

  save() {
    if (this.personalInfoForm.invalid) {
      return;
    }
    console.log(this.personalInfoForm.value);
  }
}
