import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Location } from '@angular/common';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: "app-button",
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;

  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }
}