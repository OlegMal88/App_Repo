import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: "app-input",
  templateUrl: './input.component.html',
})
export class InputComponent {
  field: FieldConfig;
  group: FormGroup;
}